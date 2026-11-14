function minFlips(a: number, b: number, c: number): number {
    let n = Math.max(a, b, c);
    let minFlips = 0;

    let i = 1;
    let x = 0, y = 0, z = 0;
    while(i <= n) {
        x = a & i;
        y = b & i;
        z = c & i;

        if(z == 0) {
            if(x >= 1) {
                ++minFlips;
            }
            if(y >= 1) {
                ++minFlips;
            }
        } else {
            if(x == 0 && y == 0) {
                ++minFlips;
            }
        }

        i <<= 1;
    }

    return minFlips;
};