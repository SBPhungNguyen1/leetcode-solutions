function dailyTemperatures(temperatures: number[]): number[] {
    const n = temperatures.length;
    const result: number[] = new Array(temperatures.length).fill(0);
    const stack: number[] = [];

    for (let i = n - 1; i >= 0; i--) {
        const current = i;

        while (stack.length > 0 &&  temperatures[stack[stack.length - 1]] <= temperatures[current]) {
            stack.pop();
        }

        if (stack.length > 0)
            result[i] = stack[stack.length - 1] - i;

        stack.push(i);
    }

    return result;
};