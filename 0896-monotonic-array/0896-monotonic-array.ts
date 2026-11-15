function isMonotonic(nums: number[]): boolean {
    let flagDesc = false;
    let flagInc = false;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] < nums[i]) {
            flagInc = true;
            break;
        }
    }

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > nums[i]) {
            flagDesc = true;
            break;
        } 
    }

    return (flagInc && flagDesc) ? false : true;
};