function makeGood(s: string): string {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (stack.length === 0) {
            stack.push(s[i]);
            continue;
        }

        const prev = stack[stack.length - 1];
        
        if (Math.abs(prev.charCodeAt(0) - s[i].charCodeAt(0)) === 32)
            stack.pop();
        else
            stack.push(s[i]);
    }
    return stack.join('');
};