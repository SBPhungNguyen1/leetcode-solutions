function possibleStringCount(word: string): number {
    let consecRepCount = 0;
    let current = ''

    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (char === current) {
            consecRepCount++
        }
        current = char
    }

    return consecRepCount + 1
};