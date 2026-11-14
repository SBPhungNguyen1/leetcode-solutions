/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    const n = nums.length;
    let i = n-2;

    // find the 1st place where nums[i] < nums[i+1]
    // phai -> trai
    while (i >= 0 && nums[i] >= nums[i+1]) {
        i--;
    }

    // if found i
    // => find j (right -> left) that > nums[i]
    // ==> swap
    if (i >= 0) {
        let j = n-1;

        while(nums[j] <= nums[i]) {
            j--;
        }

        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // reverse from i+1 -> end
    let left = i+1;
    let right = n-1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};