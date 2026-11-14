function longestPalindrome(s: string): number {
    const sMap = new Map<string, number>();
    for (let i = 0; i < s.length; i++)
        sMap.set(s[i], (sMap.get(s[i]) ?? 0) + 1);
    let flag = 0;
    let total = 0;
    for (const [key, value] of sMap) {
        if (value%2===0) total+=value
        else {
            total = total + value - 1;
            flag = 1;
        }
    }
    return total+flag;
}