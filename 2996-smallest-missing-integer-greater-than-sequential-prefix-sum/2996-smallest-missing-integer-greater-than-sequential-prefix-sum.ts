function missingInteger(nums: number[]): number {
    const length = nums.length;
    if (length === 1) return nums[0]+1
    let sum = nums[0];
    for (var i = 0 ; i < length-1 ; i++) {
        if (nums[i+1] - nums[i] === 1) sum += nums[i+1];
        else break;
    }
    const numSet = new Set(nums);
    while (true) {
        if (numSet.has(sum)) sum++;
        else return sum;
    }
}