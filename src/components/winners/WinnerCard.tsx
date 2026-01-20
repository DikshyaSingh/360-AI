import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, ExternalLink, Zap, Medal, ThumbsUp, MessageCircle } from "lucide-react";

export interface Winner {
    rank: number;
    teamName: string;
    projectTitle: string;
    members?: string[];
    category: string;
    description: string;
    imageUrl?: string;
    prototypeLink?: string;
    votes: number;
}

interface WinnerCardProps {
    winner: Winner;
    onUpvote?: () => void;
    isVoting?: boolean;
}

export const WinnerCard = ({ winner, onUpvote, isVoting }: WinnerCardProps) => {
    const getRankStyles = (rank: number) => {
        switch (rank) {
            case 1:
                return {
                    card: "border-yellow-500/40 shadow-[0_0_30px_-5px_rgba(234,179,8,0.2)]",
                    badge: "bg-gradient-to-r from-yellow-400 to-amber-600 text-black border-none",
                    icon: "text-yellow-500"
                };
            case 2:
                return {
                    card: "border-slate-400/40 shadow-[0_0_30px_-5px_rgba(148,163,184,0.2)]",
                    badge: "bg-gradient-to-r from-slate-300 to-slate-500 text-black border-none",
                    icon: "text-slate-400"
                };
            case 3:
                return {
                    card: "border-orange-700/40 shadow-[0_0_30px_-5px_rgba(194,65,12,0.2)]",
                    badge: "bg-gradient-to-r from-orange-600 to-orange-800 text-white border-none",
                    icon: "text-orange-700"
                };
            default:
                return {
                    card: "border-primary/20 hover:border-primary/40",
                    badge: "bg-primary/10 text-primary border-primary/20",
                    icon: "text-primary/50"
                };
        }
    };

    const [imageError, setImageError] = useState(false);

    const styles = getRankStyles(winner.rank);

    return (
        <Card className={`h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-2 ${styles.card}`}>
            <CardHeader className="p-0 relative">
                <div className="relative h-48 w-full overflow-hidden bg-muted/30 group">
                    {winner.imageUrl && !imageError ? (
                        <img
                            src={winner.imageUrl}
                            alt={winner.projectTitle}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <div className="flex h-full flex-col items-center justify-center text-muted-foreground gap-2">
                            <Trophy className={`h-16 w-16 opacity-20 ${styles.icon}`} />
                            <span className="text-sm opacity-50">No Image Available</span>
                        </div>
                    )}

                    {/* Rank Badge */}
                    <div className="absolute top-4 left-4">
                        <Badge className={`px-3 py-1 text-lg font-bold shadow-lg ${styles.badge}`}>
                            {winner.rank <= 3 ? (
                                <span className="flex items-center gap-1">
                                    <Trophy className="w-4 h-4" fill="currentColor" /> #{winner.rank}
                                </span>
                            ) : (
                                `#${winner.rank}`
                            )}
                        </Badge>
                    </div>

                    {/* Category Badge overlay on image (bottom right) */}
                    {winner.category && (
                        <div className="absolute bottom-3 right-3">
                            <Badge variant="secondary" className="bg-black/60 backdrop-blur-md text-white border-white/10">
                                {winner.category}
                            </Badge>
                        </div>
                    )}
                </div>
            </CardHeader>

            <CardContent className="p-6 flex-grow">
                <div className="mb-4">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 mb-1">
                        {winner.projectTitle}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-medium">
                        <Medal className="w-4 h-4" />
                        <span>Team: {winner.teamName}</span>
                    </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line line-clamp-4">
                    {winner.description}
                </p>

                {/* Member tags logic preserved but hidden if empty */}
                {winner.members && winner.members.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1">
                        {winner.members.map((member, i) => (
                            <span key={i} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-sm">
                                {member}
                            </span>
                        ))}
                    </div>
                )}
            </CardContent>

            <CardFooter className="p-6 pt-0 mt-auto flex flex-col gap-3">
                <div className="flex gap-3 w-full">
                    {winner.prototypeLink && (
                        <Button asChild className="flex-1 group" variant="outline">
                            <a href={winner.prototypeLink} target="_blank" rel="noopener noreferrer">
                                <Zap className="mr-2 h-4 w-4 group-hover:text-yellow-400 transition-colors" />
                                View Prototype
                            </a>
                        </Button>
                    )}
                    <Button
                        className={`flex-1 ${!winner.prototypeLink ? 'w-full' : ''} transition-all active:scale-95`}
                        variant="secondary"
                        onClick={onUpvote}
                        disabled={isVoting}
                    >
                        <ThumbsUp className={`mr-2 h-4 w-4 ${isVoting ? 'animate-pulse' : 'text-primary'}`} />
                        <span className="font-bold">{winner.votes || 0}</span>
                        <span className="ml-1 opacity-70">Votes</span>
                    </Button>
                </div>
                <Button asChild className="w-full" variant="default">
                    <a href="https://discord.gg/Nb9aHrumQ" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Join Discussion
                    </a>
                </Button>
            </CardFooter>
        </Card>
    );
};
