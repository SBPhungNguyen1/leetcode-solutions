function productExceptSelf(nums: number[]): number[] {
    const prefixLeft = new Array(nums.length + 1).fill(1);
    const prefixRight = new Array(nums.length + 1).fill(1);

    for (let i = 0; i < nums.length; i++)
        prefixLeft[i + 1] = prefixLeft[i] * nums[i];
    for (let i = nums.length - 1; i >= 0; i--) 
        prefixRight[i] = prefixRight[i + 1] * nums[i];

    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        arr.push(prefixLeft[i] * prefixRight[i + 1]);
    }
    
    return arr;
};


// [1,2,3,4]
// [1,1,2,6,24]
// [24,24,12,4,1]
// [1,4,12,24,24]