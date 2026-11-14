function weightedSum(parent: number[], nums: number[]): number {
    const n = parent.length;

    // tree
    const children : number[][] = Array.from({length: n}, () => []);

    for (let i = 1; i<n ; i++) {
        children[parent[i]].push(i);
    }

    // depth of node i
    const depth = new Array<number>(n).fill(0);

    depth[0] = 1;

    const queue: number[] = [0];
    let height = 1;

    let index = 0;

    while (index<queue.length) {
        const node = queue[index++];

        for (const child of children[node]) {
            depth[child] = depth[node]+1;
            height = Math.max(height, depth[child]);
            queue.push(child);
        }
    }
    let answer = 0;
    for (let i=0; i<n; i++) {
        answer = answer + nums[i] * (height - depth[i] + 1);
    }

    return answer;
};