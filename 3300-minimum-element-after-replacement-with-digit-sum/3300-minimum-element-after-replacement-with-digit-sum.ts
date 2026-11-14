function minElement(nums: number[]): number {
    let min = Infinity;
    for (const num of nums) {
        const str = num.toString().split('');
        const sum = str.reduce((sum, acc) => sum + Number(acc), 0);
        min = Math.min(sum, min);
    }
    return min;
};