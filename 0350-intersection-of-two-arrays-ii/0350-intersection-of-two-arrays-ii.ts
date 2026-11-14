function intersect(nums1: number[], nums2: number[]): number[] {
    const arr : number[] = [];
    const map1 = new Map<number, number>();
    const map2 = new Map<number, number>();

    for (var i = 0; i < nums1.length ; i++) map1.set(nums1[i], (map1.get(nums1[i]) ?? 0) + 1)
    for (var i = 0; i < nums2.length ; i++) map2.set(nums2[i], (map2.get(nums2[i]) ?? 0) + 1)

    for (const [key, value] of map1) {
        const times = Math.min(value, map2.get(key) ?? 0);
        for (var k = 0; k < times ; k++) arr.push(key);
    }

    return arr;
}