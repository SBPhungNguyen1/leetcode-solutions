type Server = [at: number, weight: number, index: number];

function assignTasks(servers: number[], tasks: number[]): number[] {
    const order = (a: Server, b: Server) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2];
    const free = new PriorityQueue<Server>(order, servers.map((w, i): Server => [0, w, i])); 

    const ans: number[] = [], busy = new PriorityQueue<Server>(order);
    for (const [s, t] of tasks.entries()) {
        while (!busy.isEmpty() && busy.front()[0] <= s) {
            const [, w, i] = busy.dequeue();
            free.enqueue([0, w, i]);
        }
        const [at, w, i] = (free.isEmpty() ? busy : free).dequeue(); 
        busy.enqueue([Math.max(at, s) + t, w, i]);
        ans.push(i);
    }

    return ans;
}