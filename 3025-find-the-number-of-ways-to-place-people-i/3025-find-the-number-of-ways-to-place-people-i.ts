function numberOfPairs(points: number[][]): number {
    points.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
    let cnt = 0;

    for (let i = 0; i < points.length; i++) {
        const [x0, y0] = points[i];
        let bot = -Infinity, top = y0;

        for (let j = i + 1; j < points.length; j++) {
            const [x1, y1] = points[j];
            if (y1 <= top && y1 > bot) {
                cnt++;
                bot = y1;
                if (y1 === top) top--;
            }
        }
    }
    return cnt;
}