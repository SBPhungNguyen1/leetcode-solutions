function transformArray(nums: number[]): number[] {
    let even = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0)
            even++;
    }
    const odd = nums.length - even;
    const arr = [];
    for (let i = 0; i < even; i++)
        arr.push(0);
    for (let i = 0; i < odd; i++)
        arr.push(1);
    return arr;
};