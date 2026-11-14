function longestSubarray(nums: number[], k: number): number {
    const n = nums.length;
    let ans = 0;
    const seen = new Int32Array(k).fill(-1);

    for (let i = 0; i < n; i++) {
        let cur = 0;
        for (let j = i; j < n; j++) {
            let val = nums[j] % k;
            let target = ((2 * val) % k + k) % k;
            seen[target] = i;

            cur = ((cur + val) % k + k) % k;
            if (cur === 0 || seen[cur] === i) {
                ans = Math.max(ans, j - i + 1);
            }
        }
    }    
    return ans;
};