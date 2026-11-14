function maxValue(nums: number[]): number {
    let pulse = 0;
    let maxEvenPrefix = 0;
    let maxOddPrefix = -Infinity;
    let minIntervalSum = 0;

    for (let i = 0; i < nums.length; i++) {
        pulse += i % 2 === 0 ? nums[i] : -nums[i];

        if ((i + 1) % 2 === 0) {
            minIntervalSum = Math.min(minIntervalSum, pulse - maxEvenPrefix);
            maxEvenPrefix = Math.max(maxEvenPrefix, pulse);
        } else {
            minIntervalSum = Math.min(minIntervalSum, pulse - maxOddPrefix);
            maxOddPrefix = Math.max(maxOddPrefix, pulse);
        }
    }

    return pulse - 2 * minIntervalSum;

};