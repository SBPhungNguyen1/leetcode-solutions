function separateDigits(nums: number[]): number[] {
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        const split = nums[i].toString().split('');

        for (let j = 0; j < split.length; j++) {
            arr.push(Number(split[j]));
        } 
    }
    return arr;
};