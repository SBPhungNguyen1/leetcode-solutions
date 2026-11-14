function minAddToMakeValid(s: string): number {
    let [t, c] = [0, 0];
    for (const e of s) 
        e === ')' && c === 0 ? t++ : e === '(' ? c++ : c--
    return t + Math.abs(c); 

};