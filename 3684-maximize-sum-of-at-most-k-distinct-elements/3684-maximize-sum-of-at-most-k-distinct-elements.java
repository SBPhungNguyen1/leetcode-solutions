class Solution {
    public int[] maxKDistinct(int[] nums, int k) {
        return Arrays.stream(nums)
                    .boxed()                       // int -> Integer
                    .distinct()                    // alike HashSet -> remove duplicate
                    .sorted(Collections.reverseOrder()) // Sort DESC
                    .limit(k)                      // get k first elements
                    .mapToInt(Integer::intValue)   // Integer -> int
                    .toArray();     
    }
}