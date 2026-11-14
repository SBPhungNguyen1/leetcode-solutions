function shortestCompletingWord(licensePlate: string, words: string[]): string {
    words.sort((a, b) => a.length - b.length);
    console.log(words);
    const licenseMap = new Map<string, number>();
    for (const char of licensePlate.toLowerCase()) {
        if (char >= 'a' && char <= 'z') {
            licenseMap.set(char, (licenseMap.get(char) || 0) + 1);
        }
    }
    for (const word of words) {
        const wordMap = new Map<string, number>();
        for (let i = 0; i < word.length; i++)
            wordMap.set(word[i], (wordMap.get(word[i]) ?? 0) + 1);

                let completing = true;

        for (const [char, count] of licenseMap) {
            if ((wordMap.get(char) ?? 0) < count) {
                completing = false;
                break;
            }
        }

        if (completing) {
            return word;
        }
    }

    return "";
};