function summaryRanges(nums: number[]): string[] {
    const numArr : string[] = [];
    let firstNum: number = nums[0];

    if (nums.length===0) return [];
    
    for (var i = 1; i < nums.length ; i++) {
        if (nums[i] - nums[i-1] !== 1) {
            numArr.push(firstNum === nums[i-1] ? firstNum+"" : firstNum+"->"+nums[i-1])
            firstNum = nums[i];
        }
    }

    numArr.push(
        firstNum === nums[nums.length - 1]
            ? firstNum + ""
            : firstNum + "->" + nums[nums.length - 1]
    );

    return numArr;
};