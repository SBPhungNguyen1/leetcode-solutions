function minimumOperations(nums: number[]): number {
    let maxLengthEndingWith1 = 0;
    let maxLengthEndingWith2 = 0;
    let maxLengthEndingWith3 = 0;

    for (const currentValue of nums) {
        switch (currentValue) {
            case 1:
                maxLengthEndingWith1++;
                break;
            case 2:
                maxLengthEndingWith2 = Math.max(maxLengthEndingWith1, maxLengthEndingWith2) + 1;
                break;
            case 3:
                maxLengthEndingWith3 = Math.max(
                    maxLengthEndingWith1,
                    maxLengthEndingWith2,
                    maxLengthEndingWith3
                ) + 1;
                break;
        }
    }

    const longestSubsequenceLength = Math.max(
        maxLengthEndingWith1,
        maxLengthEndingWith2,
        maxLengthEndingWith3
    );

    return nums.length - longestSubsequenceLength;
};