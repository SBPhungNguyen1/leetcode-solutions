function countServers(n: number, logs: number[][], x: number, queries: number[]): number[] {
    logs.sort((a, b) => a[1] - b[1]);

    const sortedQueries = queries
        .map((time, index) => ({ time, index }))
        .sort((a, b) => a.time - b.time);

    const count = new Array(n + 1).fill(0);

    const result = new Array(queries.length).fill(0);

    let left = 0;
    let right = 0;
    let activeServers = 0;

    for (const { time, index } of sortedQueries) {
        const start = time - x;

        while (
            right < logs.length &&
            logs[right][1] <= time
        ) {
            const id = logs[right][0];

            if (count[id] === 0) {
                activeServers++;
            }

            count[id]++;
            right++;
        }

        while (
            left < right &&
            logs[left][1] < start
        ) {
            const id = logs[left][0];

            count[id]--;

            if (count[id] === 0) {
                activeServers--;
            }

            left++;
        }

        result[index] = n - activeServers;
    }

    return result;
}