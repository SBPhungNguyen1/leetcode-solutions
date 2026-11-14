function minimumDistance(nums: number[]): number {
    const map = new Map<number, number[]>();
    for (let i = 0; i < nums.length; i++) {
        const indices = map.get(nums[i]) || [];
        indices.push(i);
        map.set(nums[i], indices);
    }
    let minDistance = Infinity;
    for (const [, values] of map) {
        if (values.length < 3) continue;
        for (let i = 0; i + 2 < values.length; i++) {
        const distance = 2 * (values[i + 2] - values[i]);
        minDistance = Math.min(minDistance, distance);
        }
    }
    return minDistance === Infinity ? -1 : minDistance;
    
};