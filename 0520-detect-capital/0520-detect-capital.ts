function detectCapitalUse(word: string): boolean {
    let upperCount = 0;

    for (let i = 0; i < word.length; i++) {
        const code = word.charCodeAt(i);
        if (code >= 65 && code <= 90) {
            upperCount++;
        }
    }
    return (
        upperCount === word.length ||
        upperCount === 0 ||
        (upperCount === 1 && word.charCodeAt(0) >= 65 && word.charCodeAt(0) <= 90)
    );
}