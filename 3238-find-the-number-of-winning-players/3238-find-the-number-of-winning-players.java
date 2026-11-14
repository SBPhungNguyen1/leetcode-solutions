class Solution {
    public int winningPlayerCount(int n, int[][] pick) {
        HashMap<String, Integer> map = new HashMap<>();

        for (int i = 0; i < pick.length; i++) {
            String key = pick[i][0] + "-" + pick[i][1];
            map.put(key, map.getOrDefault(key, 0) + 1);
        }

        Set<String> set = new HashSet<>();

        for (Map.Entry<String, Integer> entry: map.entrySet()) {
            String[] arr = entry.getKey().split("-");
            Integer value = entry.getValue();

            if (value > Integer.parseInt(arr[0])) {
                set.add(arr[0]);
            }
        }

        return set.size();
    }
}