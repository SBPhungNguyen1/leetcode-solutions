function isMonotonic(nums: number[]): boolean {
    let flag1 = true;
    let flag2 = true;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i+1]) {
            flag1 = false;
            break;
        }
    }

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < nums[i+1]) {
            flag2 = false;
            break;
        }
    }
    return flag1 || flag2;
};