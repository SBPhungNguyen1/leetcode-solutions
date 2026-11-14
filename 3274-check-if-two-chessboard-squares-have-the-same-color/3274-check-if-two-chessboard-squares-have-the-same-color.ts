function checkTwoChessboards(coordinate1: string, coordinate2: string): boolean {
    const s1 = coordinate1.charCodeAt(0) + coordinate1.charCodeAt(1);
    const s2 = coordinate2.charCodeAt(0) + coordinate2.charCodeAt(1);
    return (s1 % 2) === (s2 % 2);
};