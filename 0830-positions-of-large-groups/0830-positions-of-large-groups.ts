function largeGroupPositions(s: string): number[][] {
    let item = s[0];
    let curCount = 1;
    const arr : number[][] = [];
    for (let i = 1; i < s.length; i++) {
        if (s[i] === item) curCount++;
        else {
            if (curCount >= 3) arr.push([i-curCount, i-1])
            curCount = 1;
            item = s[i];
        }
    }
    if (curCount >= 3)
        arr.push([s.length - curCount, s.length - 1]);
    return arr;
}