class Solution {

    public String smallestPalindrome(String s, int k) {

        int[] cnt = new int[26];
        for (char c : s.toCharArray()) cnt[c - 'a']++;

        StringBuilder mid = new StringBuilder();

        int halfLen = 0;
        for (int i = 0; i < 26; i++) {
            if ((cnt[i] & 1) == 1)
                mid.append((char) ('a' + i));
            cnt[i] /= 2;
            halfLen += cnt[i];
        }

        StringBuilder left = new StringBuilder();

        long L = 1;

        while (halfLen > 0) {

            boolean found = false;

            for (int c = 0; c < 26; c++) {

                if (cnt[c] == 0) continue;

                cnt[c]--;

                long P = countPerm(cnt, halfLen - 1, k);

                long R = L + P - 1;

                if (R >= k) {
                    left.append((char) ('a' + c));
                    halfLen--;
                    found = true;
                    break;
                }

                L = R + 1;
                cnt[c]++;
            }

            if (!found) return "";
        }

        StringBuilder ans = new StringBuilder();

        ans.append(left);
        ans.append(mid);
        ans.append(left.reverse());

        return ans.toString();
    }

    // -----------------------------

    private long countPerm(int[] cnt, int rem, int limit) {

        long ways = 1;

        int remain = rem;

        for (int c = 0; c < 26; c++) {

            if (cnt[c] == 0) continue;

            long comb = comb(remain, cnt[c], limit);

            ways *= comb;

            if (ways > limit)
                return limit + 1L;

            remain -= cnt[c];
        }

        return ways;
    }

    // -----------------------------

    private long comb(int n, int m, int limit) {

        m = Math.min(m, n - m);

        long res = 1;

        for (int i = 1; i <= m; i++) {

            res = res * (n - m + i) / i;

            if (res > limit)
                return limit + 1L;
        }

        return res;
    }
}