function checkValidString(s: string): boolean {
    const openStack = []; // track open brackets
    const starIdx = []; // track * index
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')') {
            if (openStack.pop() === undefined) {
                if (starIdx.pop() === undefined) return false;
            }
        } else if (s[i] === '(') {
            openStack.push(i);
        } else {
            starIdx.push(i);
        }
    }

    // for left open brackets
    if (openStack.length > starIdx.length) return false;
    while (openStack.length) {
        if (openStack.pop() > starIdx.pop()) return false;
    }
    return true;
};