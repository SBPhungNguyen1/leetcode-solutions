function countOppositeParity(nums: number[]): number[] {
    const arr = [];
    for (let i = 0; i < nums.length - 1; i++) {
        const isEven = nums[i] % 2 === 0 ? true : false;
        let count = 0;
        for (let j = i + 1; j < nums.length; j++) {
            if (isEven && nums[j] % 2 === 1)
                count++;
            else if (!isEven && nums[j] % 2 === 0)
                count++;
        }
        arr.push(count);
    }
    arr.push(0);
    return arr;
};