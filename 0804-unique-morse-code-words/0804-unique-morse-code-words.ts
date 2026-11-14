function uniqueMorseRepresentations(words: string[]): number {
    const wordSet = new Set<string>();
    for (const word of words) {
        let str : string = '';
        for (let i = 0; i < word.length; i++) {
            str += convertToMorse(word[i]);
        }
        console.log(str);
        wordSet.add(str);
    }
    return wordSet.size;

};

function convertToMorse(word: string) : string {
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    return morse[word.charCodeAt(0) - 97];
}