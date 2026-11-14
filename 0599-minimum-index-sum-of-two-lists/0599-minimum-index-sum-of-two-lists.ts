function findRestaurant(list1: string[], list2: string[]): string[] {
    const map = new Map<string, number>();
    
    // set for list1
    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i], i);
    }
    
    let minIndex = Infinity;
    let result: string[] = [];
    
    // list2 ==> find similar
    for (let j = 0; j < list2.length; j++) {
        const restaurant = list2[j];
        
        if (map.has(restaurant)) {
            const sumIndex = map.get(restaurant)! + j;
            
            if (sumIndex < minIndex) {
                minIndex = sumIndex;
                result = [restaurant]; // Reset arr, push item
            } else if (sumIndex === minIndex) {
                result.push(restaurant); // only push
            }
        }
    }
    
    return result;
};