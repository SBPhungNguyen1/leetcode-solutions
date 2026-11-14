class Solution {
    public Map<Character, Integer> map() {
        Map<Character, Integer> inventory = new HashMap<>();
        inventory.put('I', 1);
        inventory.put('V', 5);
        inventory.put('X', 10);
        inventory.put('L', 50);
        inventory.put('C', 100);
        inventory.put('D', 500);
        inventory.put('M', 1000);
        return inventory;
    }
    public int romanToInt(String s) {
        Map<Character, Integer> inventory = map();
        Integer sum = inventory.get(s.charAt(s.length() - 1));
        System.out.println(sum);
        for (int i = s.length()-1; i > 0;i--) {
            if (inventory.get(s.charAt(i)) <= inventory.get(s.charAt(i-1)))
            {
                sum +=inventory.get(s.charAt(i-1));
                System.out.println("at i="+i+"sum"+sum);
            }
            else {
                sum-= inventory.get(s.charAt(i-1));
                System.out.println("at i="+i+"sum"+sum);
            }
        }
        return sum;
    }
}