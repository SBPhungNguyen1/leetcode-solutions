class Solution {
    public int maxProduct(int[] nums) {
        Arrays.sort(nums);
        int length = nums.length;
        int opt1 = (nums[length-1]-1) * (nums[length-2]-1);
        int opt2 = (nums[0]-1) * (nums[1]-1);
        return Math.max(opt1, opt2);
    }
}