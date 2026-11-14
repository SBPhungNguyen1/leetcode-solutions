class Solution {
    public int earliestTime(int[][] tasks) {
        int min = 1000;
        for (int i = 0; i < tasks.length; i++) {
            int finish = tasks[i][0] + tasks[i][1];
            min = Math.min(min, finish);
        }
        return min;
    }
}