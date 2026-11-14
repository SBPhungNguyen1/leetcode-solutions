function reverseBits(n: number): number {
    const binary = n.toString(2);
    const newBinary = binary.split('').reverse().join('') + "0".repeat(32 - binary.length);
    console.log(newBinary);
    return parseInt(newBinary, 2);
};