function findContentChildren(g: number[], s: number[]): number {
    g.sort((a,b) => a-b);
    s.sort((a,b) => a-b);

    let curCookie = 0;
    let curChild = 0;
    let count = 0;

    console.log(g,s)

    while (curCookie < s.length && curChild < g.length) {
        if (g[curChild] <= s[curCookie]) {
            count++;
            curChild++
        }
        curCookie++;
    }
    return count;
};