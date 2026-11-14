function hasGroupsSizeX(deck: number[]): boolean {
    const cardMap = new Map<number, number>();
    for (let i = 0; i < deck.length; i++) 
        cardMap.set(deck[i], (cardMap.get(deck[i]) ?? 0) + 1);
    
    let max = cardMap.get(deck[0]);

    for (let i = 2; i <= max; i++) {
        let flag = true;
        for (const [key, value] of cardMap) {
            if (value % i !== 0) {
                flag = false;
                break;
            }
        }
        if (flag === true)  return true;
    }

    return false;
};