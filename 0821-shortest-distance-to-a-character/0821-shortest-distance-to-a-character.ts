function shortestToChar(s: string, c: string): number[] {
        const result = new Array(s.length).fill(Infinity);

    let prev = -Infinity;

    // left -> right
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            prev = i;
        }

        result[i] = i - prev;
    }

    prev = Infinity;

    // right -> left
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === c) {
            prev = i;
        }

        result[i] = Math.min(result[i], prev - i);
    }

    return result;
};