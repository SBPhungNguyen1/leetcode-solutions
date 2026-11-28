function balancedStringSplit(s: string): number {
    let r = 0;
    let l = 0;
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "L")
            l++;
        else 
            r++;
        
        if (l === r)
            count++;
    }
    return count;
};