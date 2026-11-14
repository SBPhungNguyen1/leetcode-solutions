class Solution {
    public int peakValleyDifference(int[] nums) {
        int sumUp = 0;
        int sumDown = 0;
        for (int i = 1; i < nums.length - 1; i++) {
            if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1])
                sumUp += nums[i];
            else if (nums[i] < nums[i - 1] && nums[i] < nums[i + 1])
                sumDown += nums[i];
        }
        return sumUp - sumDown;
    }
}