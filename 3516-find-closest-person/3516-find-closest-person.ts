function findClosest(x: number, y: number, z: number): number {
    const diffX = Math.abs(x - z);
    const diffY = Math.abs(y - z);
    return (diffX === diffY) ? 0 : 
        (diffX > diffY) ? 2 : 1;
};