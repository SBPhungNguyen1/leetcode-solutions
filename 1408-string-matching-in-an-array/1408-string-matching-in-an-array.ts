function stringMatching(words: string[]): string[] {
    const result = [];
    for (const item of words) {
        let count = 0;
        for (let i = 0; i < words.length; i++) {
            if (words[i].includes(item))
                count++;
        }
        if (count > 1)
            result.push(item);
    }
    return result;
};