function minCost(n: number, colors: string, edges: number[][]): number {
    const adj = Array.from({ length: n}, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }
    const parent = new Array(n).fill(-1);
    const order = [0];
    parent[0] = -2;
    for (let i = 0; i < order.length; i++) {
        const u = order[i];
        for (const v of adj[u]) {
            if (v === parent[u])
                continue;
            parent[v] = u;
            order.push(v);
        }
    }
    const sub = new Array(n).fill(1);
    for (let i = n - 1; i > 0; i--) {
        const u = order[i];
        const p = parent[u];
        sub[p] += sub[u];
    }
    let base = 0;
    for (let i = 0; i < n; i++)
        if (colors[i] === 'R')
            base += sub[i];

    const dp = new Array(n).fill(0);
    let minW = 0;
    for (let i = n - 1; i >=0; i--) {
        const u = order[i];
        dp[u] = colors[u] === 'R' ? -sub[u] : sub[u];
        
        for (const v of adj[u]) {
            if (parent[v] === u)
                dp[u] += Math.min(0, dp[v]);
        }
        minW = Math.min(minW, dp[u]);
    }
    return base + minW;
};