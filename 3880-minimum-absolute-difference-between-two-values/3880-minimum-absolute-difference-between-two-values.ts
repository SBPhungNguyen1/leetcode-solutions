function minAbsoluteDifference(nums: number[]): number {
    let cur1 = Infinity;
    let cur2 = Infinity;
    let min = Infinity;
    for (let i = 0 ; i < nums.length; i++) {
        if (nums[i] === 1) {
            cur1 = i;
            min = Math.min(min, Math.abs(cur1 - cur2));
        }
        else if (nums[i] === 2) {
            cur2 = i;
            min = Math.min(min, Math.abs(cur1 - cur2));
        }
    }
    return min === Infinity ? -1 : min;
};