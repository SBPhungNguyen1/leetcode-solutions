function findMaxAverage(nums: number[], k: number): number {
    let maxAvg = -400001;
    for (let i = 0; i < nums.length - k + 1; i++) {
        let sum = 0;
        for (let j = i; j < i + k; j++) {
            sum += nums[j];
        }
        maxAvg = Math.max(maxAvg, sum/k);
    }
    return maxAvg;
};