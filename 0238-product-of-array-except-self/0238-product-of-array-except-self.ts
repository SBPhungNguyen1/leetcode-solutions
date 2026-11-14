function productExceptSelf(nums: number[]): number[] {
    const productLeft = new Array(nums.length + 1).fill(1);
    const productRight = new Array(nums.length + 1).fill(1);

    for (let i = 0; i < nums.length; i++)
        productLeft[i+1] = productLeft[i] * nums[i];
    for (let i = nums.length - 1; i > 0 ; i--)
        productRight[i-1] = productRight[i] * nums[i];

    const result = new Array(nums.length).fill(1);
    for (let i = 0; i < nums.length; i++) 
        result[i] = productLeft[i] * productRight[i];

    return result;
};