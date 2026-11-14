function fourSum(nums: number[], target: number): number[][] {
    const arr : number[][] = [];
    nums.sort((a, b) => a - b) // min - max

    for (let i = 0; i < nums.length-3; i++) {
        // skip if i = i-1
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // prune
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
        if (nums[i] + nums[nums.length - 3] + nums[nums.length - 2] + nums[nums.length - 1] < target) continue;

        for (let j = i + 1; j < nums.length - 2; j++) {
            // the same: skip if j = j-1 (already)
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            // prune
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break;
            if (nums[i] + nums[j] + nums[nums.length - 2] + nums[nums.length - 1] < target) continue;

            let left = j+1;
            let right = nums.length-1;
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target){
                    arr.push([nums[i], nums[j], nums[left], nums[right]]);
                    while(left < right && nums[left] === nums[left+1]) left++;
                    while(left < right && nums[right] === nums[right-1]) right--;

                    left++;
                    right--;
                }
                else if (sum < target) {
                    left++;
                }else{
                    right--;
                }
            }
        }
    }
    return arr;
};