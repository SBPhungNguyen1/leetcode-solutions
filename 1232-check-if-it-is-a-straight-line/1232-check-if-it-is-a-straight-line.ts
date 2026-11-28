function checkStraightLine(coordinates: number[][]): boolean {
    const [x1, y1] = coordinates[0];
    const [x2, y2] = coordinates[1];
    for (let i = 2; i < coordinates.length; i++) {
        const [x3, y3] = coordinates[i];
        if ((x3 - x1) * (y2 - y1) !== (y3 - y1) * (x2 - x1))
            return false;
    }
    return true;
};