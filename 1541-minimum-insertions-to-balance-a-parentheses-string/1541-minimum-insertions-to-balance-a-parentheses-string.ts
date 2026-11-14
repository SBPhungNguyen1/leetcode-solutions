function minInsertions(s: string): number {
    let open = 0;
    let count = 0;
    for (let i=0;i<s.length;i++) {
        if (s[i] === '(') {
            open++;
        } else if (s[i] === ')' && s[i+1] === ')') {
            if (open > 0) open--; // resolve with open brace
            else count++; // need one '(' to resolve it
            i++; // skip the next brace so we don't count it again
        } else if (s[i] === ')') {
            if (open > 0) {
                open--;
                count++; // need one more ')' to resolve
            }else{
                count += 2; // need an additional '(' and ')' to resolve
            }
        }
    }

    return open * 2 + count;
};