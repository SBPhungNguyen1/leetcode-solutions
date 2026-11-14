function sortArrayByParity(nums: number[]): number[] {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        while(nums[left] % 2 === 0 && left < right) {
            left++;
        }
        while(nums[right] % 2 === 1 && left < right) {
            right--;
        }
        const temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
        left++;
        right--;
    }
    return nums;
};