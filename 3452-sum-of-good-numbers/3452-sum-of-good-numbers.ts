function sumOfGoodNumbers(nums: number[], k: number): number {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        const leftValid = (i - k < 0) || (nums[i] > nums[i - k]);
        const rightValid = (i + k >= nums.length) || (nums[i] > nums[i + k]);

        if (leftValid && rightValid) {
            sum += nums[i];
        }
    }

    return sum;
}