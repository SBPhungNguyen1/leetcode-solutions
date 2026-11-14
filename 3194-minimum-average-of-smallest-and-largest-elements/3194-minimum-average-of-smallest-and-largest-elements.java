class Solution {
    public double minimumAverage(int[] nums) {
        Arrays.sort(nums);
        int i = 0;
        int j = nums.length - 1;
        double min = Double.POSITIVE_INFINITY;
        while (i < j) {
            min = Math.min(min, (nums[i] + nums[j]) / 2.0); 
            i++;
            j--;
        }
        return min;
    }
}