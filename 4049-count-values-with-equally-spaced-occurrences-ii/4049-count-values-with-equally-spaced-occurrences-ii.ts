function countSpecialIntegers(nums: number[]): number {
    const map = new Map<number, number[]>();
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i]))
            map.set(nums[i], []);
        const values = map.get(nums[i]);
        values.push(i);
        map.set(nums[i], values);
    }
    console.log(map);
    let count = 0;
    for (const [key, values] of map) {
        if (values.length < 3) continue;
        const space = values[1] - values[0];
        let flag = 1;
        for (let i = 2; i < values.length; i++) {
            if (values[i] - values[i - 1] !== space) {
                flag = 0;
                break;
            }
        }
        if (flag === 1)
            count++;
    }
    return count;
};