function maximumSubarraySum(nums: number[], k: number): number {
    let ans: number = -Infinity;
    let prefix: number = 0;
    let seen= new Map<number, number>();

    for (let n of nums) {
        seen.set(n, Math.min(seen.get(n) ?? Infinity, prefix));
        prefix += n;
        ans = Math.max(ans, prefix - (seen.get(k + n) ?? Infinity), prefix - (seen.get(n - k) ?? Infinity));
    }

    return ans !== -Infinity ? ans : 0;
};