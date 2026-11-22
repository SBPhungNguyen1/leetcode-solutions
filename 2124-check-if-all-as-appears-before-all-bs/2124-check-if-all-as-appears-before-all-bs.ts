function checkString(s: string): boolean {
    let flag = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a" && !flag)
            continue;
        else if (s[i] === 'b')
            flag = true;
        else 
            return false;
    }
    return true;
};