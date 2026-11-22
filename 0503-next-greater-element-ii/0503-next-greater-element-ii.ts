function nextGreaterElements(nums: number[]): number[] {
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        let curr = i + 1;
        let flag = false;
        while (curr <= nums.length) {
            if (curr === nums.length)
                curr = 0;
            if (curr === i)
                break;
            if (nums[curr] > nums[i]) {
                arr.push(nums[curr]);
                flag = true;
                break;
            }
            curr++;
        }
        if (!flag)
            arr.push(-1);
    }
    return arr;
};