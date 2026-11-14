function distributeCandies(candies: number, num_people: number): number[] {
    const distribution = new Array(num_people).fill(0);
    let candiesGiven = 1;
    let index = 0;

    while (candies > 0) {
        const currentGift = Math.min(candies, candiesGiven);
        distribution[index] += currentGift;
        candies -= currentGift;
        
        candiesGiven++;
        index = (index + 1) % num_people;
    }

    return distribution;
};