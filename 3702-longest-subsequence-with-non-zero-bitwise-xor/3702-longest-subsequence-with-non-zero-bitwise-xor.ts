function longestSubsequence(nums: number[]): number {
    let total_xor = 0;
    let has_non_zero = false;

    for (const item of nums) {
        total_xor = total_xor ^ item;
        if (item !== 0)
            has_non_zero = true;
    }

    if (!has_non_zero)
        return 0;
    return total_xor !== 0 ? nums.length : nums.length - 1;
};