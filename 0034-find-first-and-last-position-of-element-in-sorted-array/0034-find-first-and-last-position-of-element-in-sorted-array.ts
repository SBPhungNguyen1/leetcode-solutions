function searchRange(nums: number[], target: number): number[] {
    const findBound = (isFirst: boolean): number => {
        let left = 0;
        let right = nums.length - 1;
        let boundIndex = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if  (nums[mid] === target) {
                boundIndex = mid;
                if (isFirst) {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        return boundIndex;
    }

    const first = findBound(true);
    if (first === -1) return [-1, -1];

    const last = findBound(false);
    return [first, last];
};