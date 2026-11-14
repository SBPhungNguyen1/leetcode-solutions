function missingNumber(nums: number[]): number {
    const newArr = nums.sort((a,b) => b-a);
    console.log(newArr);
    for (var i = 0; i < newArr.length-1; i++) {
        if (newArr[i] - newArr[i+1] !== 1) {
            return newArr[i]-1;
        }
    }
    return newArr[newArr.length-1]!==0 ? 0 : newArr[0]+1;
};