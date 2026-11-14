function isSubsequence(s: string, t: string): boolean {
    if (s==="" && t==="") return true;
    let current = 0;
    for (var i = 0; i < t.length; i++) {
        if(t[i] === s[current]) current++;
        if (current === s.length) return true;
    }
    return false;
};