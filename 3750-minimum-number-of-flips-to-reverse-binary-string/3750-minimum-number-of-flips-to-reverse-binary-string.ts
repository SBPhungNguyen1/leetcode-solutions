function minimumFlips(n: number): number {
    const binary = n.toString(2);
    const reverse = binary.split('').reverse().join('');
    let count = 0;
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] !== reverse[i])
            count++;
    }
    return count;
};