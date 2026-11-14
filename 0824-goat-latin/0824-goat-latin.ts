function toGoatLatin(sentence: string): string {
    const str = sentence.split(" ");
    const vowel = "aiueo";
    const arr = [];
    let count = 1;
    for (const word of str) {
        let item: string;
        if (vowel.includes(word[0].toLowerCase())) {
            item = word + "ma";   
        } else {
            const first = word.slice(0, 1);
            const rest = word.slice(1);
            item = rest + first + "ma";
        }
        item = item + "a".repeat(count);
        count++;
        arr.push(item);
    }
    return arr.join(" ");
};