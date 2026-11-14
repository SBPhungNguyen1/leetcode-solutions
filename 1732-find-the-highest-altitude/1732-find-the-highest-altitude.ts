function largestAltitude(gain: number[]): number {
    const pref = new Array(gain.length + 1).fill(0);
    for (let i = 0; i < pref.length - 1; i++) 
        pref[i + 1] = pref[i] + gain[i];
    return Math.max(...pref);
};