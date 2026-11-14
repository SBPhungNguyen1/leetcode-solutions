function resilientSubarray(nums: number[], k: number): number {
    const gcd = (a: number, b: number) : number => (b === 0 ? a : gcd(b, a % b));
    let maxLen = nums.length > 0 ? 1 : 0;

    for (let i = 0; i < nums.length;) {
        const r = ((nums[i] % k) + k) % k;
        let j = i;
        while (j < nums.length && ((nums[j] % k) + k) % k === r)
            j++;

        const len = j - i;
        if (r === 0)
            maxLen = Math.max(maxLen, len);
        else {
            const step = k / gcd(r, k);
            const validM = 1 + Math.floor((len - 1) / step) * step;
            maxLen = Math.max(maxLen, validM);
        }
        i = j;
    }
    return maxLen;
};