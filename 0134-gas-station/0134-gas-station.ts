function canCompleteCircuit(gas: number[], cost: number[]): number {
    let total:number = 0;
    let ans: number = 0;
    let tank: number = 0;

    for (let i = 0; i < gas.length; i++) {
        tank += gas[i] - cost[i];
        total += gas[i] - cost[i];

        if (tank < 0) {
            tank = 0;
            ans = i + 1;
        }
    }

    if (total < 0) return -1;

    return ans;
};