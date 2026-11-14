function distributeCandies(candyType: number[]): number {
    const candySet = new Set(candyType);
    return Math.min(candySet.size, candyType.length/2)
};