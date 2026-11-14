function mirrorDistance(n: number): number {
    const mirror = n.toString().split('').reverse().join('');
    return Math.abs(n - Number(mirror));
};