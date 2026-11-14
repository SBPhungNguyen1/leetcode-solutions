function countSpecialIntegers(nums: number[]): number {
    const map = new Map<number, number[]>();
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i]))
            map.set(nums[i], []);
        const values = map.get(nums[i]);
        values.push(i);
        map.set(nums[i], values);
    }
    let count = 0;
    for (const [key, values] of map) {
        if (values.length !== 3) continue;
        if (values[1] - values[0] === values[2] - values[1])
            count++;
    }
    return count;
};