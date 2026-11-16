function timeRequiredToBuy(tickets: number[], k: number): number {
    const target = tickets[k];
    let total = 0;

    for (let i = 0; i < tickets.length; i++) {
        if (i <= k) 
            total += Math.min(tickets[i], target);
        else 
            total += Math.min(tickets[i], target - 1);
    }

    return total;
};