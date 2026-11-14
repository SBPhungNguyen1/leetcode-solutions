function countSuffix(nums: number[], target: number[]): number {
    const n = nums.length;
    const diff = new Map<number, number>();
    let nonZero = 0;
    function update(value: number, delta: number) {
        const oldValue = diff.get(value) || 0;
        const newValue = oldValue + delta;
        if (oldValue === 0 && newValue !== 0)
            nonZero++;
        else if (oldValue !== 0 && newValue === 0)
            nonZero--;

        if (newValue === 0)
            diff.delete(value);
        else
            diff.set(value, newValue);
    }
    for (let i = 0; i < n; i++){
        update(nums[i], 1);
        update(target[i], -1);
    }
    const sufSorted = new Array(n).fill(true);
    for (let i = n - 2; i >= 0; i--)
        sufSorted[i] = target[i] >= target[i + 1] && sufSorted[i + 1];

    let prefEqual = true;
    let result = 0;
    for (let i = 0; i < n; i++) {
        if (prefEqual && sufSorted[i] && nonZero === 0)
            result++;
        update(nums[i], -1);
        update(target[i], 1);
        if (nums[i] !== target[i])
            prefEqual = false;
    }
    return result;
};