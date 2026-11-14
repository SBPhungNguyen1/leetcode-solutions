function removeStars(s: string): string {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '*' && s[i-1]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join('');
};