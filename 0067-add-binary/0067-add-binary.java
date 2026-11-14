class Solution {
    public String addBinary(String a, String b) {
        StringBuilder sb = new StringBuilder();
        
        int flag = 0;
        int i = a.length() - 1;
        int j = b.length() - 1;
        
        while (i >= 0 || j >= 0 || flag > 0) {
            int newNumber = flag;
            
            if (i >= 0) {
                newNumber += a.charAt(i) - '0';
                i--;
            }
            if (j >= 0) {
                newNumber += b.charAt(j) - '0';
                j--;
            }
            
            sb.append(newNumber % 2);
            
            flag = newNumber / 2;
        }
        return sb.reverse().toString();
    }
}