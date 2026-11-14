class Solution {
    public String getSmallestString(String s) {

        char[] chars = s.toCharArray();

        for (int i = 1; i < chars.length; i++) {
            int num1 = chars[i] - '0';
            int num0 = chars[i - 1] - '0';

            if ((num0 & 1) == (num1 & 1) && num1 < num0) {
                int tmp = num0;
                chars[i - 1] = (char) (num1 + '0');
                chars[i] = (char) (num0 + '0');
                break;
            }
        }

        return new String(chars);
    }
}