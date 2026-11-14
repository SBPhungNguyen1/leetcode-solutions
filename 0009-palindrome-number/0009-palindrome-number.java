class Solution {
    public boolean isPalindrome(int x) {
        String stringX = String.valueOf(x);
        System.out.println("stringX"+ stringX);
        // System.out.println(stringX.length());
        for (int i = 0; i < stringX.length()/2; i++)
        {
            if (stringX.charAt(i) != stringX.charAt(stringX.length()-1-i))
                return false;
        }
        return true;   
    }
}