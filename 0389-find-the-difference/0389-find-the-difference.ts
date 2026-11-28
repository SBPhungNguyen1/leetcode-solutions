function findTheDifference(s: string, t: string): string {
    const arr = Array(26).fill(0);

    for (let i = 0; i < s.length; i++) 
        arr[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    for (let i = 0; i < t.length; i++) {
        if (arr[t.charCodeAt(i) - 'a'.charCodeAt(0)] === 0)
            return t[i];
        arr[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    return "";
};