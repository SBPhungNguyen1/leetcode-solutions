function minimumChairs(s: string): number {
    let max = 0;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "E")
            count++;
        else
            count--;
        max = Math.max(max, count);
    }
    return max;
};