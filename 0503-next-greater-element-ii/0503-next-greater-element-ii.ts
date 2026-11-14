function nextGreaterElements(nums: number[]): number[] {
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        let cur = i + 1;
        if (cur === nums.length)
            cur = 0;
        let flag = -1;
        while (cur !== i) {
            if (nums[cur] > nums[i]) {
                flag = nums[cur];
                break;
            }
            cur++;
            if (cur === nums.length)
                cur = 0;
        }
        arr.push(flag);
    }
    return arr;
};