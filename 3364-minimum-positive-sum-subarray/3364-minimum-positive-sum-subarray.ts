function minimumSumSubarray(nums: number[], l: number, r: number): number {
    let minSum = Infinity;

    for (let left = 0; left < nums.length; left++) {
        let sum = 0;
        for (let right = left; right < nums.length; right++) {
            sum += nums[right];
            const count = right - left + 1
            if (count >= l && count <= r && sum > 0 && sum < minSum) {
                minSum = sum;
            }
        }
    }

    return minSum === Infinity ? -1 : minSum;
};