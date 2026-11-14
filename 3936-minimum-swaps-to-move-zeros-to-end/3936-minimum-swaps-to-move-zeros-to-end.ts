function minimumSwaps(nums: number[]): number {
    let count = 0;
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        while (nums[left] !== 0 && left < right)
            left++;
        while (nums[right] === 0 && left < right)
            right--;
        if (left === right) return count;
        count ++;
        left ++;
        right --;
        console.log(count, left, right);
    }
    return count;
};