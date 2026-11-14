function isOneBitCharacter(bits: number[]): boolean {
    let i = 0;
    const n = bits.length;

    // to last bit
    while (i < n - 1) {
        if (bits[i] === 1) {
            i += 2; // 2-bit => jump 2
        } else {
            i += 1; // 1-bit => jump 1
        }
    }

    // (1-bit) true if pointer place on last bit
    return i === n - 1;
};