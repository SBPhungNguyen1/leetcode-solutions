function minOperations(logs: string[]): number {
    let count = 0;
    for (const log of logs) {
        if (log === "../")
            count = Math.max(count - 1, 0);
        else if (log === "./") 
            continue;
        else
            count++;
    }
    return Math.max(count, 0);
};