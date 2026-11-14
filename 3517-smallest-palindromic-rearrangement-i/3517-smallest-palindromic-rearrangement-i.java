class Solution {
    public String smallestPalindrome(String s) {
        int n = s.length();
        int halfLen = n / 2;

        char[] halfChars = s.substring(0, halfLen).toCharArray();
        Arrays.sort(halfChars);
        String sortedHalf = new String(halfChars);

        String mid = (n % 2 != 0) ? String.valueOf(s.charAt(halfLen)) : "";
        String revHalf = new StringBuilder(sortedHalf).reverse().toString();

        return sortedHalf + mid + revHalf;
    }
}