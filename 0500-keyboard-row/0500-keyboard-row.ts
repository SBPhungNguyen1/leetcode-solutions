function findWords(words: string[]): string[] {
    const firstRow = new Set<string>(['q','w','e','r','t','y','u','i','o','p']);
    const secRow = new Set<string>(['a','s','d','f','g','h','j','k','l']);
    const thirdRow = new Set<string>(['z','x','c','v','b','n','m']);
    const arr : string[] = [];
    for (const item of words) {
        const word = item.toLowerCase();
        console.log(word)
        let flag1 = 1;
        let flag2 = 1;
        let flag3 = 1;
        for (let i = 0; i < word.length; i++) {
            if (!firstRow.has(word[i])) flag1 = 0;
            if (!secRow.has(word[i])) flag2 = 0;
            if (!thirdRow.has(word[i])) flag3 = 0;
        }
        if (flag1===1 || flag2===1 || flag3===1)
            arr.push(item);
    }
    return arr;
};