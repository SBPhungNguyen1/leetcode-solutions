function countCharacters(words: string[], chars: string): number {
    const map = new Map<string, number>();
    for (let i = 0 ; i < chars.length; i++)
        map.set(chars[i], (map.get(chars[i]) || 0) + 1);
    let sum = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > chars.length)
            continue;
        const mapW = new Map<string, number>();
        let flag = true;
        for (let j = 0; j < words[i].length; j++) {
            mapW.set(words[i][j], (mapW.get(words[i][j]) || 0) + 1);
            if (!map.has(words[i][j]) || map.get(words[i][j]) < mapW.get(words[i][j])) {
                flag = false;
                break;
            }
        }
        if (flag) {
            sum += words[i].length;
        } 
    }
    return sum;
};