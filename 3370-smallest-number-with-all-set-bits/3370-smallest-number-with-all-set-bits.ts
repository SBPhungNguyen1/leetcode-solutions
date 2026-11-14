function smallestNumber(n: number): number {
    const binary = n.toString(2);
    let s = '';
    for (let i = 0; i < binary.length; i++)
        s += '1';
    return parseInt(s, 2);
};