function intersection(nums1: number[], nums2: number[]): number[] {
    const arr = new Set();
    const numSet = new Set(nums1);
    for (var i = 0; i< nums2.length ; i++){
        if (numSet.has(nums2[i]) && !arr.has(nums2[i]))
            arr.add(nums2[i])
    }
    return [...arr] as number[]
}