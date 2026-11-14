function sortByReflection(nums: number[]): number[] {
    const map: Record<number, number> = {};
    for (const n of nums) 
        map[n] = Number([...n.toString(2)].reverse().join(''));
    return nums.sort((x, y) => map[x] - map[y] === 0 ? x - y : map[x] - map[y]);
};