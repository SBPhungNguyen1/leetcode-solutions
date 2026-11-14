function subarraysDivByK(nums: number[], k: number): number {
    const remainderCount = new Array(k).fill(0);
    
    remainderCount[0] = 1;

    let currentSum = 0;
    let count = 0;

    for (const num of nums) {
        currentSum += num;

        let remainder = ((currentSum % k) + k) % k;

        count += remainderCount[remainder];

        remainderCount[remainder]++;
    }

    return count;
};