function findGCD(nums: number[]): number {
    // nums.sort((a, b) => a - b);
    // console.log(nums);
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    // return ucln(nums[0], nums[nums.length - 1]);
    return ucln(max, min);
};

function ucln(a: number, b: number) {
    if (b == 0) return a;
    return ucln(b, a % b);
}