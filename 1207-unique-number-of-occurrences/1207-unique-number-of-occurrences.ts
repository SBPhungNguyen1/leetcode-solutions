function uniqueOccurrences(arr: number[]): boolean {
    const map = new Map();
    for (const item of arr) 
        map.set(item, (map.get(item) || 0) + 1);
    
    const setFreq = new Set();
    let count = 0;
    for (const [key, value] of map) {
        setFreq.add(value);
        count++;
    }

    return count === setFreq.size;
};