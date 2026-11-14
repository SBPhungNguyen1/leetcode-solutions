function mostCommonWord(paragraph: string, banned: string[]): string {
    // 1. banned words --> set
    const bannedSet = new Set(banned);

    // 2. convert to lowercase
    const words = paragraph.toLowerCase().split(/[^a-z]+/);

    const freqMap = new Map<string, number>();
    let mostFrequentWord = "";
    let maxCount = 0;

    // 3. Count req of not banned
    for (const word of words) {
        if (!word || bannedSet.has(word)) continue;

        const count = (freqMap.get(word) ?? 0) + 1;
        freqMap.set(word, count);

        if (count > maxCount) {
            maxCount = count;
            mostFrequentWord = word;
        }
    }

    return mostFrequentWord;
}