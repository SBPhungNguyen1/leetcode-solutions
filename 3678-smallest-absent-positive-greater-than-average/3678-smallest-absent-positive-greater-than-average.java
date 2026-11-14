class Solution {
    public int smallestAbsent(int[] nums) {
        int sum = 0;
        for (int i = 0; i < nums.length; i++)
            sum += nums[i];
        
        int avg;
        if (sum % nums.length == 0)
            avg = sum / nums.length + 1;
        else
            avg = (int) Math.ceil((sum * 1.0) / nums.length);

        System.out.println(avg);

        Set<Integer> set = new HashSet<>();

        for (int num : nums) {
            set.add(num);
        }

        while(true) {
            if (avg < 1) avg = 1;
            if (!set.contains(avg)) 
                return avg;
            avg++;
        }
    }
}