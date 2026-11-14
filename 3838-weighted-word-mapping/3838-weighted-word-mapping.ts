function mapWordWeights(words: string[], weights: number[]): string {
    let result = '';

    for (const word of words) {
        let sum = 0;
        
        for (let i = 0; i < word.length; i++) {
            const charIndex = word.charCodeAt(i) - 97;
            sum += weights[charIndex];
        }

        const rem = sum % 26;

        const mappedChar = String.fromCharCode(122 - rem);
        result += mappedChar;
    }

    return result;
}