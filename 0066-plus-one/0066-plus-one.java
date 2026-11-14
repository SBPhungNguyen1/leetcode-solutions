class Solution {
    public int[] plusOne(int[] digits) {
        int flag = 1;
        for (int i = digits.length-1 ; i >=0 ;i --) {
            if (digits[i] + flag == 10){
                digits[i] = 0;
                flag = 1;
                System.out.println(digits[i]);
            }else{
                digits[i] = digits[i] + 1;
                flag = 0;
                break;
            }
        }
        if (flag == 1) {
            int[] newInts = new int[digits.length+1];
            for (int i = 0; i < digits.length ; i++) {
                newInts[i+1] = digits[i];
            }
            newInts[0] = 1;
            return newInts;
        }
        return digits;
    }
}