function countSubarrays(nums: number[]): number {
    let count = 0;
    for (let i = 2; i < nums.length; i++) {
        const sum = nums[i] + nums[i - 2];
        if (sum * 2 === nums[i - 1])
            count++;
    }
    return count;
};