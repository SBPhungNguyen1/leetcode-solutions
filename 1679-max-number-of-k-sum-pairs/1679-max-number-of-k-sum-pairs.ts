function maxOperations(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    let ans = 0;
    let i = 0, j = nums.length - 1;
    while (i < j) {
        let temp = nums[i] + nums[j];
        if (temp === k) {
            i++;
            j--;
            ans++;
        } else if (temp > k) {
            j--;
        } else {
            i++;
        }
    }
    return ans;
};