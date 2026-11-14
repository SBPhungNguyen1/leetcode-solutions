function minOperations(nums: number[], x: number): number {
    const totalSum = nums.reduce((acc, val) => acc + val, 0);
    const target = totalSum - x;

    // Edge cases
    if (target < 0) return -1;
    if (target === 0) return nums.length;

    let left = 0;
    let currentSum = 0;
    let maxSubarrayLen = -1;

    for (let right = 0; right < nums.length; right++) {
        currentSum += nums[right];

        // Shrink window from the left while sum exceeds target
        while (currentSum > target && left <= right) {
            currentSum -= nums[left];
            left++;
        }

        // Check if window matches target
        if (currentSum === target) {
            maxSubarrayLen = Math.max(maxSubarrayLen, right - left + 1);
        }
    }

    return maxSubarrayLen === -1 ? -1 : nums.length - maxSubarrayLen;
};