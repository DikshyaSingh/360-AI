export interface ParsedWinner {
    rank: number;
    teamName: string;
    projectTitle: string;
    members: string[]; // Keep for backward compatibility, but might be empty
    category: string;
    description: string;
    imageUrl: string;
    prototypeLink: string;
    votes: number;
}

export const parseCSV = (csvText: string): ParsedWinner[] => {
    const lines = csvText.split('\n');
    const headers = lines[0].split(',').map(h => h.trim().toLowerCase());

    // Map header names to our expected keys
    // We try to find columns that 'look like' our targets
    const getIndex = (keywords: string[]) => headers.findIndex(h => keywords.some(k => h.includes(k)));

    const rankIdx = getIndex(['rank', 'place', 'position']);
    const teamIdx = getIndex(['team', 'name']);
    const projectIdx = getIndex(['project', 'title']);
    const membersIdx = getIndex(['member', 'participants']); // Might be -1 if column doesn't exist
    const categoryIdx = getIndex(['cat', 'caterogy']); // Matches 'caterogy' typo
    const descIdx = getIndex(['desc', 'summary']);
    const imageIdx = getIndex(['image', 'photo', 'picture']);
    const linkIdx = getIndex(['prototype', 'link', 'url']); // Matches 'Prototype link'
    const votesIdx = getIndex(['vote', 'score', 'points', 'likes']);

    const winners: ParsedWinner[] = [];

    for (let i = 1; i < lines.length; i++) {
        // Handle potential commas inside quotes (simple regex approach, or just split by comma if simple)
        // For Google Sheets simple CSV, simply splitting by comma is risky if there are commas in text.
        // A robust regex for CSV split:
        const currentLine = lines[i];
        if (!currentLine.trim()) continue;

        // Regex to match CSV columns: handles double quotes correctly
        const columns = (currentLine.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g) || [])
            .map(val => val.trim().replace(/^"|"$/g, '').replace(/""/g, '"'));

        if (columns.length < 2) continue; // Skip empty rows

        // Parse members: if valid members column exists, split it.
        let membersList: string[] = [];
        if (membersIdx !== -1 && columns[membersIdx]) {
            membersList = columns[membersIdx].split(',').map(m => m.trim());
        }

        let imageUrl = (imageIdx !== -1 ? columns[imageIdx] : '') || '';

        // Auto-convert Google Drive links to direct view links
        if (imageUrl.includes('drive.google.com') && imageUrl.includes('/d/')) {
            const match = imageUrl.match(/\/d\/(.+?)(\/|$)/);
            if (match && match[1]) {
                imageUrl = `https://drive.google.com/uc?export=view&id=${match[1]}`;
            }
        }

        winners.push({
            rank: parseInt(columns[rankIdx] || '0') || 0,
            teamName: columns[teamIdx] || 'Unknown Team',
            projectTitle: columns[projectIdx] || 'Untitled Project',
            members: membersList,
            category: (categoryIdx !== -1 ? columns[categoryIdx] : '') || '',
            description: columns[descIdx] || '',
            imageUrl: imageUrl,
            prototypeLink: (linkIdx !== -1 ? columns[linkIdx] : '') || '',
            votes: parseInt((votesIdx !== -1 ? columns[votesIdx] : '0') || '0') || 0
        });
    }

    return winners.filter(w => w.rank > 0).sort((a, b) => a.rank - b.rank);
};
