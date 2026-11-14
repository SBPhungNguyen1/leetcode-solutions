function maxDigitRange(nums: number[]): number {
    const arr: number[][] = [];
    for (let i = 0; i < nums.length; i++) {
        let max = -Infinity;
        let min = Infinity;
        const str = String(nums[i]);
        for (let j = 0; j < str.length; j++) {
            max = Math.max(max, Number(str[j]));
            min = Math.min(min, Number(str[j]));
        }
        const gap = max - min;
        arr.push([nums[i], gap]);
    }
    console.log(arr);
    arr.sort((a, b) => b[1] - a[1]) // max -> min
    let sum = 0;
    let max = arr[0][1];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] === max)
            sum += arr[i][0];
    }
    return sum;
};