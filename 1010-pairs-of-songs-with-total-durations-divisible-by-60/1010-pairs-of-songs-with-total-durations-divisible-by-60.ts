function numPairsDivisibleBy60(time: number[]): number {
    const map = new Map<number, number>();
    for (const item of time) {
        const time = item % 60;
        map.set(time, (map.get(time) ?? 0) + 1);
    }

console.log(map);
    let total = 0;
    for (const [key, value] of map) {
        let remain = 60 - key;
        if (remain === 60)
            remain = 0;
        const remainValue = map.get(remain) ?? 0;
        if (remainValue === 0)
            continue;
        else if (remain === key) {
            if (remainValue < 2)
                continue;
            else {
                const sum = (remainValue * (remainValue - 1)) / 2;
                total += sum;
                map.set(remain, 0)
            }
        } else {
            total += value * remainValue;
            map.set(remain, 0)
        }
        
    }

    return total;
};