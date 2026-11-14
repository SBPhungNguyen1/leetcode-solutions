function numberOfPairs(nums1: number[], nums2: number[], k: number): number {
    return nums1.reduce((r, x) => r + nums2.reduce((c, y) => c + +!(x % (y * k)), 0), 0);
};