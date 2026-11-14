function sortArrayByParityII(nums: number[]): number[] {
    const arrOdd = [];
    const arrEven = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0)  arrEven.push(nums[i]);
        else arrOdd.push(nums[i]);
    }
    const result = [];
    for (let i = 0; i < arrOdd.length; i++) {
        result.push(arrEven[i]);
        result.push(arrOdd[i]);
    }
    return result;
};