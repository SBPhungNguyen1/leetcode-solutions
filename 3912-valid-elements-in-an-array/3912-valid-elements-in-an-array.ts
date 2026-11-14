function findValidElements(nums: number[]): number[] {
    const n = nums.length;
    if (n <= 2) return [...nums];

    const rightMax = new Array<number>(n);
    rightMax[n - 1] = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(nums[i], rightMax[i + 1]);
    }

    const result: number[] = [nums[0]];
    let leftMax = nums[0];

    for (let i = 1; i < n - 1; i++) {
        if (nums[i] > leftMax || nums[i] > rightMax[i + 1]) {
            result.push(nums[i]);
        }
        leftMax = Math.max(leftMax, nums[i]);
    }

    result.push(nums[n - 1]);
    return result;
}