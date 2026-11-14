function minimumArrayLength(nums: number[]): number {
    const min = Math.min(...nums);
    let count = 0;

    for (const num of nums) {
        if (num % min != 0) {
            return 1
        }
        if (num === min) {
            count++;
        }
    }

    return Math.ceil(count/2);
};