function toggleLightBulbs(bulbs: number[]): number[] {
    bulbs.sort((a, b) => a - b) // min -> max
    const map = new Map<number, number>();
    for (const bulb of bulbs)
        map.set(bulb, (map.get(bulb) || 0) + 1);
    const result = [];
    for (const [key, value] of map) {
        if (value % 2 === 1)
            result.push(key);
    }
    return result;
};