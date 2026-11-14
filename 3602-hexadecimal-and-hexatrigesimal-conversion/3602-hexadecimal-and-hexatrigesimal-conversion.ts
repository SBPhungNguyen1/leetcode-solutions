function concatHex36(n: number): string {
    return ((n*n).toString(16) + (n*n*n).toString(36)).toUpperCase();
};