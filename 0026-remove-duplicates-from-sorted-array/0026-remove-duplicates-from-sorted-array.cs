public class Solution {
    public int RemoveDuplicates(int[] nums) {
        int n = nums.Length;
        int k = 0;
        for (int i =0; i<n;i++)
        {
            int flag=0;
            for (int j=0;j<k;j++)
            {
                if (nums[i] == nums[j])
                {
                    flag=1;
                    break;
                }
            }
            if (flag == 1)
            {
                Delete(nums, i);
                i--;
                n--;
            }
            else
            {
                k++;
            }
        }
        return k;
    }
    public void Delete(int[] nums, int pot)
    {
        for (int i=pot;i<nums.Length-1;i++)
        {
            nums[i] = nums[i+1];
        }
    }
}