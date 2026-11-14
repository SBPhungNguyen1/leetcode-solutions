function subarraySum(nums: number[]): number {
    function totalToI (index: number, current: number) : number {
        let sum = 0;
        for (let i = index; i <= current; i++) 
            sum += nums[i];
        return sum;
    }   
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        const maxIndex = Math.max(0, i - nums[i]);
        sum += totalToI(maxIndex, i);
    }
    return sum;
};

