public class Solution {
    int k=0;
    public int RemoveElement(int[] nums, int val) {
        int n = nums.Length;
        for (int i=0;i<n;i++)
        {
            if (nums[i] == val)
            {
                Delete(nums, i);
                n--;
                i--;
            }
        }
        return n;
    }
    private void Delete(int[] nums, int pot)
    {
        for (int i=pot;i<nums.Length-1;i++)
        {
            nums[i] = nums[i+1];
        }
    } 
}