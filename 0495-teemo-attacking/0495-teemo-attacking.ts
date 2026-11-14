function findPoisonedDuration(timeSeries: number[], duration: number): number {
    let sum = 0;
    for (let i = 0; i < timeSeries.length-1; i++) {
        const timeConsume = Math.min(duration, timeSeries[i+1] - timeSeries[i]);
        sum += timeConsume;
    }
    return sum+duration;
};