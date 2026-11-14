function nearestDrone(drones: number[][], target: number[]): number {
    let minDistance = Infinity;
    let curMin = -1;
    let current = 0;
    for (const [x, y, range] of drones) {
        const dis = Math.abs(x - target[0]) + Math.abs(y - target[1]);
        if (dis <= range) {
            if (minDistance > dis) {
                minDistance = dis;
                curMin = current;
            }
        }
        current++;
    }

    return curMin;
};