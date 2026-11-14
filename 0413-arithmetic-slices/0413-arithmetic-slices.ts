function numberOfArithmeticSlices(nums: number[]): number {
    if (nums.length < 3) return 0;
    
    const arr = [];

    let currDiff = nums[1] - nums[0];
    let cur = 1;

    for (let i = 1; i < nums.length; i++) {
        const diff = nums[i] - nums[i-1];

        if (diff === currDiff) {
            cur++;
        } else {
            if (cur >= 3) {
                arr.push(cur);
                cur = 2;
            }
            currDiff = diff;
        }
    }

    if (cur >= 3) {
        arr.push(cur);
    }

    let sum = 0;
    for (const item of arr) {
        let total = 0;
        for (let i = 1; i <= item - 2; i++)
            total += i;
        sum += total;
    }

    return sum;
};