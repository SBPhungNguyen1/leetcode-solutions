function minimumPairRemoval(nums: number[]): number {
    const isSorted = (arr: number[]): boolean => {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }
        return true;
    };

    let operations = 0;

    while (!isSorted(nums)) {
        let minSum = Infinity;
        let targetIdx = -1;

        for (let i = 0; i < nums.length - 1; i++) {
            const currentSum = nums[i] + nums[i + 1];
            if (currentSum < minSum) {
                minSum = currentSum;
                targetIdx = i;
            }
        }

        nums.splice(targetIdx, 2, minSum);
        operations++;
    }

    return operations;
}