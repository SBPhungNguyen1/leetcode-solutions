function isArraySpecial(nums: number[]): boolean {
    if (nums.length === 1) return true;
    
    for (let i = 1; i < nums.length; i++) {
        let a = nums[i - 1] % 2;
        let b = nums[i] % 2
        if (a === b) return false  
    }  
    return true
};