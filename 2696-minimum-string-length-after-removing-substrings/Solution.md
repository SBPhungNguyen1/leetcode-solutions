# [WC] - [TypeScript] | Stack | O(N) Time & O(N) Space

# Intuition
We can use a **Stack** to remove adjacent characters that form either `"AB"` or `"CD"`. The Stack helps us efficiently track the previous character and remove matching pairs.

# Approach
1. Initialize an empty Stack.

2. Iterate through each character in the string:
    - If the Stack is empty, push the current character.
    - If the current character and the top of the Stack form `"AB"` or `"CD"`, pop the top character.
    - Otherwise, push the current character.

3. Return the **Stack length**, which represents the minimum possible string length after all removals.
# Complexity
- **Time complexity:** $$O(n)$$
`n = s.length`

- **Space complexity:** $$O(n)$$
Stack can contain up to `n` characters.

![2696-v1.png](https://assets.leetcode.com/users/images/ec69198d-358f-411d-b46b-f7b7538f4fc7_1794712079.7692993.png)


# Code
```typescript []
function minLength(s: string): number {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0) {
            stack.push(s[i]);
            continue;
        }
        if ((s[i] === 'D' && stack[stack.length - 1] === 'C') || 
            (s[i] === 'B' && stack[stack.length - 1] === 'A')) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.length;
};
```