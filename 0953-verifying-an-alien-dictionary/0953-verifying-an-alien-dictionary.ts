function isAlienSorted(words: string[], order: string): boolean {
    const charMap = new Map<string, number>();
    for (let i = 0; i < order.length; i++)
        charMap.set(order[i], i);

    for (let i = 0; i < words.length - 1; i++) {
        const word1 = words[i];
        const word2 = words[i + 1];
        let isSortedPair = false;

        const minLength = Math.min(word1.length, word2.length);

        for (let j = 0; j < minLength; j++) {
            const char1 = word1[j];
            const char2 = word2[j];

            if (char1 !== char2) {
                if (charMap.get(char1) > charMap.get(char2)) {
                    return false;
                }
                isSortedPair = true;
                break;
            }
        }

        if (!isSortedPair && word1.length > word2.length)
            return false
    }

    return true;
};