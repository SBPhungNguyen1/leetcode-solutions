function maximumEnergy(energy: number[], k: number): number {
    let highest = Number.MIN_SAFE_INTEGER;

    for (let i = energy.length - 1; i >= 0; i--) {
        energy[i] += energy[i + k] ?? 0;
        highest = Math.max(highest, energy[i]);
    }

    return highest;
};