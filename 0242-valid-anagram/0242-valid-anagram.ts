function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length)
        return false;

    let arr = Array(26).fill(0);

    for (let i = 0; i < s.length; i++)
        arr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    for (let i = 0; i < t.length; i++) {
        const index = t.charCodeAt(i) - 'a'.charCodeAt(0);
        if (arr[index] === 0)
            return false;
        arr[index]--;
    }
    return true;
};