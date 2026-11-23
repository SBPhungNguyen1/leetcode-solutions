function rob(nums: number[]): number {
    const dp = [0]; // o vi tri i -> max tien nhan duoc truoc i
    dp.push(nums[0]);

    for (let i = 1; i < nums.length; i++) {
        const max = Math.max(dp[dp.length - 1], dp[dp.length - 2] + nums[i]);
        dp.push(max);
    }
    // console.log(dp);
    return dp[dp.length - 1];

};