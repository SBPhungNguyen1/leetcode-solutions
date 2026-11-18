/**
 Do not return anything, modify nums in-place instead.
 */

//      solution 1: in-place shifting
// function moveZeroes(nums: number[]): void {
//     const length = nums.length;
//     let countZero = 0;
//     for (var i = 0; i < length-1-countZero ; i++) {
//         if (nums[i] === 0) {
//             countZero++;
//             for (var j = i ; j < length - 1 ; j++) {
//                 nums[j] = nums[j+1];
//             }
//             nums[length-1] = 0;
//             i--;
//         }
//     }
// };


function moveZeroes(nums: number[]): void {
    const arr = Array(nums.length).fill(0);
    let curr = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            arr[curr] = nums[i];
            curr++;
        }
    }
    nums.length = 0;
    for (let i = 0; i < arr.length; i++) {
        nums.push(arr[i]);
    }
};