function numSubarraysWithSum(nums: number[], goal: number): number {
    let happyWindows = 0, windowStart = 0, currentSum = 0;

    for (let windowEnd = 0, tail = 0; windowEnd < nums.length; windowEnd++) {
        currentSum += nums[windowEnd];

        if (nums[windowEnd] == 1) tail = 0;

        while (windowStart <= windowEnd && currentSum >= goal) {
            if (currentSum == goal) tail++;
            currentSum -= nums[windowStart++]
        }

        happyWindows += tail;
    }

    return happyWindows;
};