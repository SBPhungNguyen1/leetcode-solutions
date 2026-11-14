function missingMultiple(nums: number[], k: number): number {
    const numSet = new Set(nums);

    let item = k;
    while(true) {
        if (!numSet.has(item)) return item;
        item += k; 
    }
};