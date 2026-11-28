function minOperations(logs: string[]): number {
    const stack = [];
    for (const log of logs) {
        if (log === '../')
            stack.pop();
        else if (log === './')
            continue;
        else {
            const folder = log.split('/')[0];
            stack.push(folder);
        }
    }
    return stack.length;
};