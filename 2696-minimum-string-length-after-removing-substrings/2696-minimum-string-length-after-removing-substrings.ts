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