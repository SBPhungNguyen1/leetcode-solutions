function firstMissingPositive(nums: number[]): number {
    let x = 1;
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === x) {
            x++;
        }
    }
    
    return x;
};