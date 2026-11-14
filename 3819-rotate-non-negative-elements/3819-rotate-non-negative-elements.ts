function rotateElements(nums: number[], k: number): number[] {
    const positions: number[] = [];
    const values: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) {
            positions.push(i);
            values.push(nums[i]);
        }
    }

    if (positions.length === 0) return nums;

    k %= positions.length;

    const rotated: number[] = [];

    for (let i = k; i < values.length; i++) {
        rotated.push(values[i]);
    }
    for (let i = 0; i < k; i++) {
        rotated.push(values[i]);
    }

    for (let t = 0; t < positions.length; t++) {
        nums[positions[t]] = rotated[t];
    }

    return nums;
}