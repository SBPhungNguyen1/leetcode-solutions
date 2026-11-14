class Solution {
    public int countStaircase(int[] nums) {
        int ans = 0;
        
        for (int start = 0; start < nums.length; start++) {
            Map<Integer, Integer> freq = new HashMap<>();
            Map<Integer, Integer> rank = new HashMap<>();
            int invalid = 0;
            
            for (int end = start; end < nums.length; end++) {
                int x = nums[end];
                if (!rank.containsKey(x))
                    rank.put(x, rank.size() + 1);
                
                int expected = rank.get(x);
                int oldFreq = freq.getOrDefault(x, 0);
                
                if (oldFreq > 0 && oldFreq != expected)
                    invalid--;
                
                int newFreq = oldFreq + 1;
                freq.put(x, newFreq);
                
                if (newFreq != expected)
                    invalid++;
                
                if (invalid == 0)
                    ans++;
            }
        }

        return ans;
    }
}