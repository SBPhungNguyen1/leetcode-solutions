function maxProductPair(nums: number[], target: number): number[] {
    let max = -Infinity;
    let result = [-1, -1];
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target && nums[i] * nums[j] > max && nums[i] !== nums[j]) {
                max = nums[i] * nums[j];
                const firstI = nums[i] > nums[j] ? i : j;
                const secI = nums[i] > nums[j] ? j : i;
                result = [firstI, secI];
            }
        }
    }
    return result;
    
};