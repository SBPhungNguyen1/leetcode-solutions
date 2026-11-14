function maxCandies(status: number[], candies: number[], keys: number[][], containedBoxes: number[][], initialBoxes: number[]): number {
    let nbr = 0;
    let currentIb: number[] = []; 
    let nextIb: number[] = initialBoxes;
    const getNbrCandies = (ib: number[]) => {
        for(const i of ib){
            if(status[i]){ 
                nbr += candies[i];
                for(const j of keys[i]){
                    status[j] = 1;
                }
                getNbrCandies(containedBoxes[i]);
            }
            else nextIb.push(i);
        }
    }

    const checkArray = (a: number[], b: number[]) => {
        if(a.length !== b.length) return false;
        const setA = new Set(a);
        return b.every((x: number) => setA.has(x));        
    }

    while(!checkArray(currentIb, nextIb)){
        currentIb = nextIb;
        nextIb = [];
        getNbrCandies(currentIb);
    }
    return nbr;

};
