// function subarraySum(nums: number[], k: number): number {
//     const prefix = new Array(nums.length + 1).fill(0);
//     for (let i = 0; i < nums.length; i++) {
//         prefix[i+1] = prefix[i] + nums[i];
//     }
//     let count = 0;
//     for (let i = 0; i < prefix.length; i++) {
//         for (let j = i + 1; j < prefix.length; j++) {
//             const sum = prefix[j] - prefix[i];
//             if (sum === k)
//                 count++;
//         }
//     }
//     return count;
// };

function subarraySum(nums: number[], k: number): number {
    const map = new Map<number, number>();
    map.set(0, 1);
    let currentSum = 0;
    let count = 0;
    
    for (const num of nums) {
        currentSum += num;
        const target = currentSum - k;
        if (map.has(target))
            count += map.get(target);
        
        map.set(currentSum, (map.get(currentSum) || 0) + 1);
    }

    return count;
};