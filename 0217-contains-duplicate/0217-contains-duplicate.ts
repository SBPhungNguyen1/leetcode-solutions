function containsDuplicate(nums: number[]): boolean {
    const numSet = new Set<number>(nums);
    if (numSet.size === nums.length)
        return false;
    return true;
};