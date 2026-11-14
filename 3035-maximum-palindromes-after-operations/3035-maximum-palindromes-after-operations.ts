function maxPalindromesAfterOperations(words: string[]): number {
    const frequencies = new Map<string, number>;
    const wordLengths = [];
    for (const word of words) {
        for (const letter of word) {
            frequencies.set(letter, (frequencies.get(letter)?? 0) + 1)
        }
        wordLengths.push(Math.floor(word.length /2));
    }

    
    let pairCount = [...frequencies.values()].reduce((acc, curr)=> acc += Math.floor(curr/2), 0)
    wordLengths.sort();
    let i = 0;
    while (pairCount >= wordLengths[i] ) {
        pairCount -= wordLengths[i];
        i++;
    }
    return i;

};