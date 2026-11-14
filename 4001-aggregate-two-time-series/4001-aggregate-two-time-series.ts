function aggregateTimeSeries(series1: number[][], series2: number[][]): number[][] {
    const result: number[][] = [];

    let i = 0;
    let j = 0;

    while (i < series1.length || j < series2.length) {
        const timestamp = Math.min(
            i < series1.length ? series1[i][0] : Infinity,
            j < series2.length ? series2[j][0] : Infinity
        );

        const value1 = i < series1.length ? series1[i][1] : 0;
        const value2 = j < series2.length ? series2[j][1] : 0;

        result.push([timestamp, value1 + value2]);

        if (i < series1.length && series1[i][0] === timestamp) {
            i++;
        }

        if (j < series2.length && series2[j][0] === timestamp) {
            j++;
        }
    }

    return result;
}