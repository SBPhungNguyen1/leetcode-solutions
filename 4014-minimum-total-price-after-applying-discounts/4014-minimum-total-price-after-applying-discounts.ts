function minPrice(prices: number[], discounts: number[]): number {
    prices.sort((a, b) => b-a);
    discounts.sort((a, b) => b-a);
    let total = 0;
    for (var i = 0; i< prices.length;i++) {
        if (i < discounts.length) {
            total = total + prices[i] * (100 - discounts[i]) / 100;
        } else {
            total = total + prices[i];
        }
    }
    return total;
};