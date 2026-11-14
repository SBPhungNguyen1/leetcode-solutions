function maxSubarrayLength(nums: number[], k: number): number {
    let left = 0;
    let maxLength = 0;

    const numMap = new Map<number, number>();

    for (let right = 0; right < nums.length; right++) {

        numMap.set(nums[right], (numMap.get(nums[right]) ?? 0) + 1);

        while (numMap.get(nums[right]) > k) {
            numMap.set(nums[left], numMap.get(nums[left]) - 1);
            left++;
        }

        maxLength = Math.max(maxLength,right - left + 1);
    }

    return maxLength;
}