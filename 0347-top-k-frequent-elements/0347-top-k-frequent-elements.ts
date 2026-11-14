function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) 
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    const arr : number[][] = [];
    for (const [key, value] of map) {
        arr.push([key, value]);
    }
    arr.sort((a, b) => b[1] - a[1]);
    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(arr[i][0]);
    }
    return result;
};