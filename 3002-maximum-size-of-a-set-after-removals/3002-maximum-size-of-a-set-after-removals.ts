function maximumSetSize(nums1: number[], nums2: number[]): number {
    const target = nums1.length / 2
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    let intersection = 0

    set1.forEach(n => {
        if(set2.has(n)) intersection ++
    })

    const count1 = Math.min(set1.size - intersection, target)
    const count2 = Math.min(set2.size - intersection, target)
    
    const commonCount = Math.min((target - count1) + (target - count2), intersection)

    return count1 + count2 + commonCount;
};