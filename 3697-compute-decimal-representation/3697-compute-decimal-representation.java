class Solution {
    public int[] decimalRepresentation(int n) {
        String s = String.valueOf(n);
        int len = s.length();
        List<Integer> list = new ArrayList<>();

        int multiplier = (int) Math.pow(10, len - 1);
        for (int i = 0; i < len; i++) {
            int digit = s.charAt(i) - '0';
            if (digit != 0) {
                list.add(digit * multiplier);
            }
            multiplier /= 10;
        }

        int[] result = new int[list.size()];
        for (int i = 0; i < list.size(); i++) {
            result[i] = list.get(i);
        }
        
        return result;
    }
}