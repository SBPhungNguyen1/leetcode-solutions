function maxPairStrength(nums: number[]): number {
    let maxStr = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const g = gcd(nums[i], nums[j]);

            const part1 = Math.floor(nums[i] / g);
            const part2 = Math.floor(nums[j] / g);
            const strength = part1 * part2;

            if (strength > maxStr) {
                maxStr = strength;
            }
        }
    }   
    return maxStr; 
};

function gcd(a: number, b: number) : number {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}