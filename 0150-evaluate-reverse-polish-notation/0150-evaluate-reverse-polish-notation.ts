function evalRPN(tokens: string[]): number {
    const result: number[] = [];
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === '+') {
            const item1 = Number(result.pop());
            const item2 = Number(result.pop());
            result.push(item1 + item2);
        } else if (tokens[i] === '-') {
            const item1 = Number(result.pop());
            const item2 = Number(result.pop());
            result.push(item2 - item1);
        } else if (tokens[i] === '*') {
            const item1 = Number(result.pop());
            const item2 = Number(result.pop());
            result.push(item1 * item2);
        } else if (tokens[i] === '/') {
            const item1 = Number(result.pop());
            const item2 = Number(result.pop());
            result.push(Math.trunc(item2 / item1));
        } else {
            result.push(Number(tokens[i]));
        }
    }
    return result[result.length - 1];
};