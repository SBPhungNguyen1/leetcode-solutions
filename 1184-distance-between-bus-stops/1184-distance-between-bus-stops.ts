function distanceBetweenBusStops(distance: number[], start: number, destination: number): number {
    let sum = distance.reduce((sum, acc) => sum + acc, 0);
    let curr = start;
    let totalClockwise = 0;
    while (curr !== destination) {
        totalClockwise += distance[curr];
        curr++;
        if (curr === distance.length)
            curr = 0;
    }
    return Math.min(totalClockwise, sum - totalClockwise);
};