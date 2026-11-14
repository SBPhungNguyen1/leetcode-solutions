function rearrangeString(s: string, x: string, y: string): string {
    const map = new Map<string, number>();
    for (let i = 0; i < s.length; i++) 
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    const result = [];
    for (let i = 0; i < map.get(y); i++)
        result.push(y);
    for (const [key, value] of map) {
        if (key === x || key === y)
            continue;
        for (let i = 0; i < value; i++)
            result.push(key);
    }
    for (let i = 0; i < map.get(x); i++)
        result.push(x);

    return result.join('');
};