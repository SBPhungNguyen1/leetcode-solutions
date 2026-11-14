function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const record = new Map()
    const record2 = new Map()
    for ( var i =0;i<s.length;i++){
        if ((record.has(s[i]) && record.get(s[i]) !== t[i]) || (record2.has(t[i]) && record2.get(t[i]) !== s[i])){
            return false;
        } else {
            record.set(s[i], t[i]);
            record2.set(t[i], s[i]);
        }
        
    }
    return true;
};