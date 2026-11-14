class Solution {
    public int maxDistance(int[] colors) {
        int max = 0;
        for (int i = 0; i < colors.length - 1; i++) {
            int right = colors.length - 1;
            int left = i;
            if ((right - left) < max) return max;
            while (left < right) {
                if (colors[left] != colors[right]) {
                    max = Math.max(max, right - left);
                    break;
                }
                right--;
            }
        }
        return max;
    }
}