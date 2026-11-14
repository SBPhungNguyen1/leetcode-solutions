class Solution {
    public int strStr(String haystack, String needle) {
        for (int i = 0; i <= (haystack.length() - needle.length()); i++) {
            String subStr = haystack.substring(i, i+needle.length());
            if (subStr.equals(needle)) return i;
        }
        return -1;
    }
}