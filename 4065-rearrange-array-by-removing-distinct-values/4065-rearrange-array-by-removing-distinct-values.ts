function rearrangeArray(nums: number[]): number[] {
    const map = new Map();

    for (const num of nums) {
        map.set(num, (map.get(num) ?? 0) + 1);
    }

    const arr = [];

    const vals = [...map.keys()].sort((a, b) => a - b); // min -> max

    while (map.size > 0) {
        for (const num of vals) {
            if (!map.has(num)) {
                continue;
            }
            arr.push(num);
            const count = map.get(num);

            if (count === 1)
                map.delete(num)
            else
                map.set(num, count - 1);
        }
    }

    return arr;
};