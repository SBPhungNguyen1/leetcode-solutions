function getCommon(nums1: number[], nums2: number[]): number {
    const set = new Set(nums2);
    for (const num of nums1) {
        if (set.has(num))
            return num;
    }
    return -1;
};