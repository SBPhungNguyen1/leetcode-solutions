
function longestSubarray(nums: number[]): number {
    let left = 0;
    let count0 = 0;
    let max = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            count0++;
        }

        while (count0 > 1) {
            if (nums[left] === 0) {
                count0--;
            }
            left++;
        }

        max = Math.max(max, right - left);
    }

    return max;
}
