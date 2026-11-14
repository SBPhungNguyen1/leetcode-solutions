function findLHS(nums: number[]): number {
    const countMap = new Map<number, number>();
    
    for (const num of nums) {
        countMap.set(num, (countMap.get(num) ?? 0) + 1);
    }
    
    let maxLen = 0;
    
    for (const [key, count] of countMap) {
        if (countMap.has(key + 1)) {
            const currentLen = count + countMap.get(key + 1)!;
            maxLen = Math.max(maxLen, currentLen);
        }
    }
    
    return maxLen;
}