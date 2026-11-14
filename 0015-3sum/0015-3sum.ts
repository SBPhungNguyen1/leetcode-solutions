function threeSum(nums: number[]): number[][] {
    const res: number[][] = [];
    
    // Sort array to use two pointers and handle duplicates easily
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        // If smallest number is > 0, sum can never be 0
        if (nums[i] > 0) break;

        // Skip duplicate values for the first element
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);

                // Skip duplicate values for left and right pointers
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;  // Sum too small, move left pointer to increase
            } else {
                right--; // Sum too big, move right pointer to decrease
            }
        }
    }

    return res;
}