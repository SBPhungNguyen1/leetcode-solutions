function majorityElement(nums: number[]): number {
    let count = 1;
    let candidate = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (candidate === nums[i])
            count++;
        else {
            count--;
            if (count === 0) {
                candidate = nums[i];
                count = 1;
            }
        }
    }
    return candidate;
};