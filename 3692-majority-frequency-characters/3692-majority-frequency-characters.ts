function majorityFrequencyGroup(s: string): string {
    const map = new Map<string, number>();
    for (let i = 0; i < s.length; i++)
        map.set(s[i], (map.get(s[i]) || 0) + 1);

    const mapReq = new Map<number, string[]>();

    for (const [key, value] of map) {
        const values = mapReq.get(value) || [];
        values.push(key);
        mapReq.set(value, values);
    }

    let maxSize = -1;
    let bestFreq = -1;
    for (const [key, value] of mapReq) {
        const curSize = value.length;
        if (curSize > maxSize || (curSize === maxSize && key > bestFreq)) {
            maxSize = curSize;
            bestFreq = key;
        }
    }
    return (mapReq.get(bestFreq) || []).join("");
};