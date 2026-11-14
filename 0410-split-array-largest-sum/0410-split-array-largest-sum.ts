function splitArray(nums: number[], k: number): number {
    let l = 0;
    let r = 0;

    for (const num of nums) {
        l = Math.max(l, num);
        r += num;
    }

    let ans = r;

    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);

        let subArrayCount = 1;
        let currentSum = 0;

        for (const num of nums) {
            if (currentSum + num > mid) {
                subArrayCount++;
                currentSum = num;
            } else {
                currentSum += num;
            }
        }

        if (subArrayCount <= k) {
            ans = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return ans;
};