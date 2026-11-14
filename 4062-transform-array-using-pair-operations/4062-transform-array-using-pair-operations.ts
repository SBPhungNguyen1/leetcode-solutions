function canTransform(source: number[], target: number[]): boolean {
    if (source.length !== target.length)
        return false;
    const sum1 = source.reduce((sum, acc) => sum + acc, 0);
    const sum2 = target.reduce((sum, acc) => sum + acc, 0);
    return sum1 === sum2;
};