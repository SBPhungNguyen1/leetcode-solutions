public class Solution {
    public void Merge(int[] nums1, int m, int[] nums2, int n) {
        for (int i=m;i<n+m;i++)
        {
            nums1[i] = nums2[i-m];
        }
        m = m+n;
        for (int i=0;i<m-1;i++)
        {
            for (int j=i;j<m;j++)
            {
                if (nums1[i]>nums1[j])
                {
                    int temp = nums1[i];
                    nums1[i] = nums1[j];
                    nums1[j] = temp;
                }
            }
        }
    }
}