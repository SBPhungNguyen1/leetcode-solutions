function findTheDifference(s: string, t: string): string {
    let missing = t.charCodeAt(t.length - 1);
    for (let i = 0; i < s.length; i++) {
        missing = missing + t.charCodeAt(i) - s.charCodeAt(i);
    }
    return String.fromCharCode(missing);
};