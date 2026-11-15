# [WC] - [TypeScript] | Hash Map + Frequency Counting | O(N) Time & O(K) Space

# Intuition
We need to find the character that appears more times in `t` than in `s`. Using **frequency maps** allows us to count and compare the occurrences of each character.

# Approach
1. Create two Maps to store the frequency of each character in `s` and `t`.

2. Iterate through both strings and update their character frequencies.

3. Iterate through the frequency map of `t`: ***If a character does not exist in `s`, or its frequency is different, return that character.***

4. Return an empty string if no difference is found.
# Complexity
- **Time complexity:** $$O(n)$$
`n = t.length`

- **Space complexity:** $$O(k)$$
`k` is number of distinct characters


![0389-v2.png](https://assets.leetcode.com/users/images/c8f1c4a5-e93b-4145-a3c9-d64e11b4169a_1794707810.0286465.png)

# Code
```typescript []
function findTheDifference(s: string, t: string): string {
    const maps = new Map<string, number>();
    const mapt = new Map<string, number>();

    for (const char of s) 
        maps.set(char, (maps.get(char) || 0) + 1);

    for (const char of t) 
        mapt.set(char, (mapt.get(char) || 0) + 1);

    for (const [key, value] of mapt) {
        if (!maps.has(key) || maps.get(key) !== value)
            return key;
    }
    return "";
}
```