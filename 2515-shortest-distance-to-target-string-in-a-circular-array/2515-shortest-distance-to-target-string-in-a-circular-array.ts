function closestTarget(words: string[], target: string, startIndex: number): number {
    const n = words.length;
    let minDistance = Infinity;

    for (let i = 0; i < n; i++) {
        if (words[i] === target) {
            const direct = Math.abs(i - startIndex);
            const circular = n - direct;
            const dist = Math.min(direct, circular);
            
            minDistance = Math.min(minDistance, dist);
        }
    }

    return minDistance === Infinity ? -1 : minDistance;
};