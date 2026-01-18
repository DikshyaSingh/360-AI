import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import { Winner, WinnerCard } from "@/components/winners/WinnerCard";
import { parseCSV } from "@/lib/csvParser";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Trophy, Loader2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

// Google Apps Script Web App URL
const API_URL = "https://script.google.com/macros/s/AKfycbwHaOux8vCIXw-VRjZPwUXfmMBYHsjrP2audEA2rb0Gw_sliO88CqRzptvWRM7wphKk/exec";

const fetchWinners = async (): Promise<Winner[]> => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error("Failed to fetch winners data");
    }
    const data = await response.json();

    // Parse the JSON array from Apps Script
    // Expected structure: [{rank, teamname, projectname, ...}, ...]
    // Note: Keys might be lowercased by the script logic
    return data
        .map((row: any) => ({
            rank: parseInt(row.rank || row.Rank || '0') || 0,
            teamName: row['team name'] || row.teamname || row['Team Name'] || 'Unknown Team',
            projectTitle: row['project name'] || row.projectname || row['Project name'] || 'Untitled Project',
            members: [],
            category: row.caterogy || row.category || '',
            description: row.description || row.Description || '',
            imageUrl: parseImageUrl(row.image || row.Image || ''),
            prototypeLink: row['prototype link'] || row.prototypelink || row['Prototype link'] || '',
            votes: parseInt(row.votes || row.vote || row.score || '0') || 0
        }))
        .filter((w: Winner) => w.rank > 0)
        .sort((a: Winner, b: Winner) => a.rank - b.rank);
};

// Helper for image parsing (duplicated from csvParser for now, or import if preferred)
const parseImageUrl = (url: string) => {
    if (!url) return '';
    if (url.includes('drive.google.com') && url.includes('/d/')) {
        const match = url.match(/\/d\/(.+?)(\/|$)/);
        if (match && match[1]) {
            return `https://drive.google.com/uc?export=view&id=${match[1]}`;
        }
    }
    return url;
};

const Winners = () => {
    const { data: winners, isLoading, error, refetch } = useQuery({
        queryKey: ["winners"],
        queryFn: fetchWinners,
    });

    const [votingFor, setVotingFor] = useState<string | null>(null);

    const handleUpvote = async (teamName: string) => {
        setVotingFor(teamName);
        try {
            // 1. Get User IP
            // We use a timeout to fail fast if ipify is blocked
            const ipController = new AbortController();
            const ipTimeout = setTimeout(() => ipController.abort(), 3000);

            let userIp = 'unknown_ip';
            try {
                const ipResponse = await fetch('https://api.ipify.org?format=json', { signal: ipController.signal });
                const ipData = await ipResponse.json();
                userIp = ipData.ip;
            } catch (e) {
                console.warn("Could not fetch IP, sending without unique checking may fail on server.", e);
            } finally {
                clearTimeout(ipTimeout);
            }

            // 2. Send Vote
            await fetch(API_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain;charset=utf-8',
                },
                body: JSON.stringify({
                    teamName: teamName,
                    userIp: userIp
                })
            });

            // 3. User Feedback
            toast.success(`Vote submitted for ${teamName}!`, {
                description: "Note: If you already voted for this team, it won't be counted again."
            });

            setTimeout(() => {
                refetch();
            }, 1500);

        } catch (err) {
            console.error("Voting failed", err);
            toast.error("Network Error: Could not verify vote.");
        } finally {
            setVotingFor(null);
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />

            <main className="flex-grow pt-24 pb-16 px-4 sm:px-8 max-w-7xl mx-auto w-full">
                {/* ... (Header) ... */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                        <Trophy className="w-8 h-8 text-primary" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 mb-4">
                        Hackathon Winners
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Celebrating the most innovative and impactful projects built during the event.
                    </p>
                </div>

                {isLoading ? (
                    <div className="flex justify-center items-center h-64">
                        <Loader2 className="w-12 h-12 animate-spin text-primary" />
                    </div>
                ) : error ? (
                    <div className="text-center py-12">
                        <p className="text-red-500 text-lg mb-4">Failed to load winners.</p>
                        <Button variant="outline" onClick={() => window.location.reload()}>
                            Try Again
                        </Button>
                    </div>
                ) : !winners || winners.length === 0 ? (
                    <div className="text-center py-20 bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/20">
                        <div className="flex justify-center mb-4">
                            <Trophy className="w-16 h-16 text-muted-foreground/30" />
                        </div>
                        <h2 className="text-2xl font-bold text-muted-foreground mb-2">No Winners Announced Yet</h2>
                        <p className="text-muted-foreground max-w-md mx-auto">
                            The judges are still deliberating! Check back soon to see which teams take home the prizes.
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-content-center">
                        {winners?.map((winner, index) => (
                            <div key={index} className="w-full max-w-sm mx-auto">
                                <WinnerCard
                                    winner={winner}
                                    onUpvote={() => handleUpvote(winner.teamName)}
                                    isVoting={votingFor === winner.teamName}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Winners;
