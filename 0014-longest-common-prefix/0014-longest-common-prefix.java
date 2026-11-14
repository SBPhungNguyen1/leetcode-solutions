class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs.length==0)
            return "";
        if (strs.length==1)
            return strs[0];
        String commonPrefix = "";
        int i = 0;
        while (i<strs[0].length()) {
            for (int j=1; j<strs.length ;j++) {
                if (strs[j].length()<i+1 || (strs[0].charAt(i) != strs[j].charAt(i)))
                    return commonPrefix;
            }
            commonPrefix = commonPrefix + strs[0].charAt(i);
            i++;
        }
        return commonPrefix;
    }
}