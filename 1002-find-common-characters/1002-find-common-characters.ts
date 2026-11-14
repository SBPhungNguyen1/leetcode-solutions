function commonChars(words: string[]): string[] {
    // 1. count letters in each words -> saved in a map
    // 2. for each diff letter -> find min freq of it
    // 3. push them in the array

    const map = Array.from({length: words.length}, () => new Map<string, number>());
    let cur = 0;
    for (const word of words) {
        for (let i = 0; i < word.length; i++) {
            const item = word[i];
            map[cur].set(item, (map[cur].get(item) || 0) + 1);
        }
        cur++;
    }

    let min;
    let arr: string[] = [];
    for (const [key, value] of map[0]) {
        min = value;
        for (let i = 1; i < map.length; i++) {
            min = Math.min(min, map[i].get(key) || 0);
        }

        for (let i = 0; i < min; i++)
            arr.push(key);
    }
    return arr;
};