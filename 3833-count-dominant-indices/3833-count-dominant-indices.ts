function dominantIndices(nums: number[]): number {
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        let sum = 0;
        for (let j = i + 1; j < nums.length; j++){
            sum += nums[j];
        }
        const avg = sum / (nums.length - i - 1);
        console.log(avg, nums[i]);
        if (avg < nums[i])
            count++;
    }
    return count;
};