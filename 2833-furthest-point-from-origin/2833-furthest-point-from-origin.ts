function furthestDistanceFromOrigin(moves: string): number {
    const map = new Map<string, number>();
    for (let i = 0; i < moves.length; i++)
        map.set(moves[i], (map.get(moves[i]) || 0) + 1);
    return Math.abs((map.get('L') || 0) - (map.get('R') || 0)) + (map.get('_') || 0);
};