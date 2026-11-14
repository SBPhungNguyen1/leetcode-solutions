class Solution {
    public boolean checkPrimeFrequency(int[] nums) {
        Map<Integer, Integer> map = new HashMap<>();

        for (int num: nums) 
            map.put(num, map.getOrDefault(num, 0) + 1);
        
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            int key = entry.getKey();
            int value = entry.getValue();

            if (isPrime(value))
                return true;
        }

        return false;
    }

    private boolean isPrime(int num) {
        if (num < 2) return false;
        int n = num / 2;
        for (int i = 2; i <= n; i++) {
            if (num % i == 0)
                return false;
        }
        return true;
    }
}