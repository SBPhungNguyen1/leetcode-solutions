function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {

    let sum = 0;

    for (let i = 0; i < customers.length; i++) {
        if (grumpy[i] === 0 || i < minutes) {
            sum += customers[i]
        }
    }
    let max = sum
    if (customers.length > 1 && customers.length !== minutes) {
        for (let i = 1; i < customers.length; i++) {
        const loss = grumpy[i-1] === 1 ? customers[i-1] : 0
        const gain = grumpy[i + minutes - 1] === 1 ? customers[i + minutes - 1] : 0
        sum = sum - loss + gain;
        if (sum > max) {
            max = sum;
        }
        }
    } else {
        return sum;
    }
    return max;
};