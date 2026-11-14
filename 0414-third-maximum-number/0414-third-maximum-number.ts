function thirdMax(nums: number[]): number {
    const nSet = new Set(nums);
    const arr = Array.from(nSet)
    const sorted = arr.sort((a,b) => b-a)
    console.log(sorted);
    if (sorted.length <3) return sorted[0];
    return sorted[2];
};