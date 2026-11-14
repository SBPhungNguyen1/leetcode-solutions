function numSubarrayProductLessThanK(nums: number[], k: number): number {
    const n = nums.length;
    let start = 0, product = 1, count = 0;

    for (let end = 0; end < n; end++) {
        product *= nums[end];

        while (product >= k && start <= end) {
            product /= nums[start];
            start++;
        }

        count += end - start + 1;
    }

    return count;
};