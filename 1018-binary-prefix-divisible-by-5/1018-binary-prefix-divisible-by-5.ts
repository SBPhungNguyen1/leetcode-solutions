function prefixesDivBy5(nums: number[]): boolean[] {
    const ans: boolean[] = new Array(nums.length);
    let remainder = 0;

    for (let i = 0; i < nums.length; i++) {
        remainder = (remainder * 2 + nums[i]) % 5;
        ans[i] = remainder === 0;
    }

    return ans;
}