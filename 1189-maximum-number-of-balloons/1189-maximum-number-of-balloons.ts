function maxNumberOfBalloons(text: string): number {
    if (text.length < 7)
        return 0;
    const map = new Map<string, number>();
    const mapBalloon = new Map<string, number>();
    mapBalloon.set("b", 1);
    mapBalloon.set("a", 1);
    mapBalloon.set("l", 2);
    mapBalloon.set("o", 2);
    mapBalloon.set("n", 1);
    for (let i = 0; i < text.length; i++) 
        map.set(text[i], (map.get(text[i]) ?? 0) + 1);
    let min = Infinity;
    for (const [key, value] of mapBalloon) {
        if (!map.has(key)) 
            return 0;
        min = Math.min(min, Math.floor(map.get(key) / value));
    }
    return min;
};