function findMismatchedSegments(s1: string, s2: string): string[][] {
    const result = [];
    let i = 0;
    while (i < s1.length) {
        if (s1[i] === s2[i]) {
            i++;
            continue;
        }
        const start = i;
        while (i < s1.length && s1[i] !== s2[i])
            i++;
        
        result.push([s1.slice(start, i), s2.slice(start, i)]);
    }
    return result;
};