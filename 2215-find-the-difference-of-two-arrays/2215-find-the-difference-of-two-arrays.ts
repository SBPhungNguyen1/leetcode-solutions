function findDifference(nums1: number[], nums2: number[]): number[][] {
    const result = [];
    const set = new Set();
    for (let i = 0; i < nums1.length; i++) {
        if (!nums2.includes(nums1[i]))
            set.add(nums1[i]);
    }
    result.push([...set]);
    let set2 = new Set()
    for (let i = 0; i < nums2.length; i++) {
        if (!nums1.includes(nums2[i]))
            set2.add(nums2[i]);
    }
    result.push([...set2]);
    return result;
};