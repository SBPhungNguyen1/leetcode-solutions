function countMonobit(n: number): number {
    let count = 1; 
    let val = 1; 

    while (val <= n) {
        count++;
        val = (val << 1) | 1; 
    }

    return count;
};