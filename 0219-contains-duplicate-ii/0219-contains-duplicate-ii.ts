function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const map = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        
        if (map.has(val) && i - map.get(val)! <= k) {
            return true;
        }
        
        // Cập nhật vị trí mới nhất của phần tử
        map.set(val, i);
    }

    return false;
}