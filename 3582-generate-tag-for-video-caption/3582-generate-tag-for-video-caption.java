class Solution {
    public String generateTag(String caption) {
        StringBuilder sb = new StringBuilder("#");
        String[] words = caption.trim().split("\\s+");

        boolean isFirstWord = true;
        for (String word : words) {
            if (word.isEmpty()) continue;
            if (isFirstWord) {
                sb.append(word.toLowerCase());
                isFirstWord = false;
            } else {
                sb.append(Character.toUpperCase(word.charAt(0)));
                sb.append(word.substring(1).toLowerCase());
            }
        }

        String res = sb.toString();
        if (res.length() > 100)
            return res.substring(0,100);
        return res;
    }
}