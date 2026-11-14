function countValidPrefixes(s: string): number {
    let count0 = 0;
    let count1 = 0;
    let validPref = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '0')
            count0++;
        else
            count1++;

        if (Math.abs(count0 - count1) <= 1) {
            validPref++;
        }    
    }

    return validPref;

};