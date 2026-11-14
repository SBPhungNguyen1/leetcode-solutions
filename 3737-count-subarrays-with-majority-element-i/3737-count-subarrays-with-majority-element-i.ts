function countMajoritySubarrays(nums: number[], target: number): number {
    let balance = 0;
    const cnt = new Map<number, number>();
    cnt.set(0, 1);

    let res = 0;
    let curr = 0;

    for (const x of nums) {
        if (x === target) {
            curr += cnt.get(balance) ?? 0;
            balance++;
        } else {
            balance--;
            curr -= cnt.get(balance) ?? 0;
        }

        cnt.set(balance, (cnt.get(balance) ?? 0) + 1);
        res += curr;
    }

    return res;
};