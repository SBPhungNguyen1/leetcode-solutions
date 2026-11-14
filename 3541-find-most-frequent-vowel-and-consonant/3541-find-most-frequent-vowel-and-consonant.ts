function maxFreqSum(s: string): number {
    const vowels = 'aiueo';
    const mapV = new Map<string, number>();
    const mapC = new Map<string, number>();
    
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i]))
            mapV.set(s[i], (mapV.get(s[i]) || 0) + 1);
        else 
            mapC.set(s[i], (mapC.get(s[i]) || 0) + 1);
    }

    let sum = 0;
    let max = 0;
    
    for (const [key, value] of mapV) {
        max = Math.max(value, max);
    }

    sum += max;
    max = 0;

    for (const [key, value] of mapC) {
        max = Math.max(value, max);
    }

    return sum + max;
};