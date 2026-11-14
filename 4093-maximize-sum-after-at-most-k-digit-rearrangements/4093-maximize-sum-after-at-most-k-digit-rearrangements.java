class Solution {
    public long maximizeSum(int[] nums, int k) {
        long sum = 0;
        List<Integer> gains = new ArrayList<>();
        for (int num : nums) {
            sum += num;
            char[] digits = String.valueOf(num).toCharArray();
            Arrays.sort(digits);
            for (int l = 0, r = digits.length - 1; l < r; l++, r--) {
                char temp = digits[l];
                digits[l] = digits[r];
                digits[r] = temp;
            }
            int maxNum = Integer.parseInt(new String (digits));
            gains.add(maxNum - num);
        }
        gains.sort(Collections.reverseOrder());
        for (int i = 0; i < Math.min(k, gains.size()); i++)
            sum += gains.get(i);
        return sum;
    }
}