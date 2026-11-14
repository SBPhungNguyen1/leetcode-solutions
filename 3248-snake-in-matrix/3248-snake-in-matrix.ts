function finalPositionOfSnake(n: number, commands: string[]): number {
    let i = 0;
    let j = 0;
    for (const c of commands) {
        i += +(c === "DOWN") - +(c === "UP");
        j += +(c === "RIGHT") - +(c === "LEFT");
    }    
    return (i * n) + j;
};