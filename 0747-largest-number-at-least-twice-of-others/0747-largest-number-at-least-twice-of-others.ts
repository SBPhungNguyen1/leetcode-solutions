function dominantIndex(nums: number[]): number {
    const sorted = [...nums].sort((a, b) => b - a);

    if (sorted[0] < sorted[1] * 2) {
        return -1;
    }

    return nums.indexOf(sorted[0]);
}