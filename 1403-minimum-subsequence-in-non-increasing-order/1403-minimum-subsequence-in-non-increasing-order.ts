function minSubsequence(nums: number[]): number[] {
    const sum = nums.reduce((sum, acc) => sum + acc, 0);
    const sorted = nums.toSorted((a, b) => b - a); // max -> min
    let total = 0;
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        total += sorted[i];
        result.push(sorted[i]);
        const remain = sum - total;

        if (total > remain)
            return result;
    }
};