function minimumOperations(nums: number[]): number {
    let slices = nums;
    let count = 0;
    while (slices.length > 0) {
        const set = new Set(slices);
        if (slices.length === set.size)
            return count;
        
        slices = slices.slice(3);
        count++;
    }
    return count;
};