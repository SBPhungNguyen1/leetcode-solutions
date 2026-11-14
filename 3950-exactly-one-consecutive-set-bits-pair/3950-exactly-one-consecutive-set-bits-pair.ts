function consecutiveSetBits(n: number): boolean {
    const binary = n.toString(2);
    let count = 0;

    for (let i = 0; i < binary.length - 1; i++) {
        if (binary[i] === '1' && binary[i + 1] === '1') {
            count++;
        }
    }

    return count === 1;
}