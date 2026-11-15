# [WC] - [TypeScript] | XOR Bit Manipulation | O(N) Time & O(1) Space

# Intuition
- **XOR has a cancellation property:** `a ^ a = 0`, so identical values cancel each other out.

- **XOR operates on binary representations of numbers**, so we can convert each character into its character code and apply XOR.

- After XOR-ing all characters in both strings, only the extra character remains.

# Approach
1. Initialize `result = 0`.

2. Iterate through all characters in `s` and **XOR** their character codes into `result`.

3. Iterate through all characters in `t` and **XOR** their character codes into `result`.

4. Convert the remaining integer back to a character using `String.fromCharCode()`.

The remaining value represents the character that exists in t but not in s.

# Complexity
- **Time complexity:** $$O(n)$$
`n = t.length`

- **Space complexity:** $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

![0389-v1.png](https://assets.leetcode.com/users/images/4048961e-b1fa-4e96-b704-f94adf848dfd_1794706488.898977.png)



# Code
```typescript []
function findTheDifference(s: string, t: string): string {
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        result ^= s.charCodeAt(i);
    }
    
    for (let i = 0; i < t.length; i++) {
        result ^= t.charCodeAt(i);
    }
    
    return String.fromCharCode(result);
}
```