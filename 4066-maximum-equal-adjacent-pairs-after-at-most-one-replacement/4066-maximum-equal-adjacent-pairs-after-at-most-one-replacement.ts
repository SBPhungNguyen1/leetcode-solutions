function maxEqualAdjacentPairs(nums: number[]): number {
    const map = new Map();

    let pairs = 0;
    let max = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        const a = nums[i];
        const b = nums[i + 1];

        if (a === b) {
            pairs++;
            continue;
        }

        const x = Math.min(a, b);
        const y = Math.max(a, b);

        const key = `${x}, ${y}`;
        const value = (map.get(key) ?? 0) + 1;
        map.set(key, value);

        max = Math.max(max, value);
    }
    return pairs + max;
};