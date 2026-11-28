function isMonotonic(nums: number[]): boolean {
    let flagInc = true;
    let flagDesc = true;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > nums[i])
            flagInc = false;
        if (nums[i - 1] < nums[i])
            flagDesc = false;
        if (!flagInc && !flagDesc)
            return false;
    }
    return true;
};