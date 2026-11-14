function convertToTitle(columnNumber: number): string {
    // console.log(String.fromCharCode(68))
    let start = columnNumber;
    const arr = [];
    while(start > 0) {
        start --;
        let endWord = start % 26;
        arr.push(String.fromCharCode(65 + endWord));
        start = Math.floor(start / 26);
        console.log(endWord, start)
    }
    return arr.reverse().join("");
};