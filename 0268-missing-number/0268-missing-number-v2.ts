// solution 1 -- sorting
// function missingNumber(nums: number[]): number {
//     const newArr = nums.sort((a,b) => b-a);
//     console.log(newArr);
//     for (var i = 0; i < newArr.length-1; i++) {
//         if (newArr[i] - newArr[i+1] !== 1) {
//             return newArr[i]-1;
//         }
//     }
//     return newArr[newArr.length-1]!==0 ? 0 : newArr[0]+1;
// };

// solution 2 -- set
function missingNumber(nums: number[]): number { 
    const set = new Set(nums);
    for (let i = 0; i <= nums.length; i++) {
        if (!set.has(i))
            return i;
    }
    return -1;
}

// solution 3 -- flag
// function missingNumber(nums: number[]): number {
//     const arr = new Array(nums.length + 1).fill(true);
//     for (let i = 0; i < nums.length; i++)
//         arr[nums[i]] = false;
//     for (let i = 0; i < arr.length; i++)
//         if (arr[i])
//             return i;
//     return -1;
// }