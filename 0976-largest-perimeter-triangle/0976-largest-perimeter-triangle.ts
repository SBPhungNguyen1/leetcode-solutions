function largestPerimeter(nums: number[]): number {
    nums.sort((a, b) => b - a) // max -> min;
    for (let i = 0; i < nums.length-2; i++) {
        if(nums[i+1] + nums[i+2] > nums[i])
            return nums[i] + nums[i+1] + nums[i+2];
    }

    return 0;
};