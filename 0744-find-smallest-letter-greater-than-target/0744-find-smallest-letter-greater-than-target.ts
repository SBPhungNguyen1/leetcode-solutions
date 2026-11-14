function nextGreatestLetter(letters: string[], target: string): string {
    const set = new Set<number>();
    for (const letter of letters) {
        const num = letter.charCodeAt(0);
        set.add(num);
    }
    console.log(set);
    const find = target.charCodeAt(0);
    console.log(find)
    let result = 200;
    for (const item of set) {
        console.log(item);
        if (item > find && item < result)   result = item;
    }
    console.log(result);
    return result === 200 ? letters[0] : String.fromCharCode(result);
};