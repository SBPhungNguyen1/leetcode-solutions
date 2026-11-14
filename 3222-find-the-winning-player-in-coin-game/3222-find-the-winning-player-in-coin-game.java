class Solution {
    public String winningPlayer(int x, int y) {
        String cur = "Alice";
        
        if (x < 1 || y < 4)
            return "Bob";

        while (true) {
            x -= 1;
            y -= 4;

            if (x < 1 || y < 4)
                return cur;

            if (cur == "Alice")
                cur = "Bob";
            else
                cur = "Alice";
        }
    }
}