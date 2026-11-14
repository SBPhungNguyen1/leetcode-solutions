function checkRecord(s: string): boolean {
    const chars = s.split('');
    const charsMap = new Map<string, number>();
    let count = 0;
    let maxCount = 0;
    let flag = 0;
    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === 'L')
            count++;
        else {
            maxCount = Math.max(count, maxCount);
            count = 0;
        }
        charsMap.set(chars[i], (charsMap.get(chars[i]) ?? 0) + 1);
    }
    return (charsMap.get('A') ?? 0) < 2 && Math.max(maxCount, count) < 3;
};