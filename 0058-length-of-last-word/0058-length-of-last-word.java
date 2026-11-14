class Solution {
    public int lengthOfLastWord(String s) {
        int flag = 0;
        int count = 0;
        for (int i = (s.length()-1); i>=0; i--) {
            if (flag==0) {
                if (s.charAt(i) != ' ')
                {
                    flag=1;
                    count+=1;
                }
            }else {
                if (s.charAt(i) != ' ')
                    count+=1;
                else
                    return count;
            }
        }
        return count;
    }
}