function hasIncreasingSubarrays(nums: number[], k: number): boolean {
    function isIncreasing(from: number, to: number) : boolean {
        for (let i = from; i < to - 1; i++) {
            if (nums[i] >= nums[i+1])
                return false;
        }
        return true;
    }

    for (let i = 0; i <= nums.length - k * 2; i++) {
        if (isIncreasing(i, i + k) && isIncreasing(i + k, i + 2*k))
            return true;
    }
    return false;
};