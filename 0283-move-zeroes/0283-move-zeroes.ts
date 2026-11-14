/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    const length = nums.length;
    let countZero = 0;
    for (var i = 0; i < length-1-countZero ; i++) {
        if (nums[i] === 0) {
            countZero++;
            for (var j = i ; j < length - 1 ; j++) {
                nums[j] = nums[j+1];
            }
            nums[length-1] = 0;
            i--;
        }
    }
};