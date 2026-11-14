public class Solution {
    public bool CanJump(int[] nums) {
        // int flag = 0;
        // while (flag < nums.Length-1 && nums[flag]!=0 )
        // {
        //     flag = flag + nums[flag];
        // }
        // if (flag >= nums.Length-1 )
        //     return true;
        // return false;

        int nearestTrue = nums.Length - 1;
        for(int i = nums.Length - 2; i >= 0; i--)
        {
            // If we can jump to the nearest true, we become the nearest true.
            if(i + nums[i] >= nearestTrue)
            {
                nearestTrue = i;
            }
        }
        return nearestTrue == 0;
    }
}