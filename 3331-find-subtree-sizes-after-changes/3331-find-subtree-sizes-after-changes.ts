function findSubtreeSizes(parent: number[], s: string): number[] {
    const n = parent.length;
    const children: number[][] = Array.from({ length: n }, () => []);
    for (let x = 1; x < n; x++) children[parent[x]].push(x);
    const size: number[] = new Array(n).fill(1), above: number[] = new Array(n), last: number[] = new Array(26).fill(-1); 
    const stack = [0]; 
    while (stack.length) {
        let x = stack.pop()!;
        if (x >= 0) {
            const c = s.charCodeAt(x) - 97;
            above[x] = last[c]; 
            last[c] = x;
            stack.push(~x); 
            for (const child of children[x]) stack.push(child);
        } else {
            x = ~x;
            last[s.charCodeAt(x) - 97] = above[x];
            if (x > 0) size[above[x] >= 0 ? above[x] : parent[x]] += size[x];  
        }
    }
    return size;
}