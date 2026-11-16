function maxChunksToSorted(arr: number[]): number {
    const stack = [];
    
    for (const num of arr) {
        let max = num;
        
        while (stack.length > 0 && stack[stack.length - 1] > num) {
            const item = stack.pop();
            max = Math.max(max, item);
        }
        
        stack.push(max);
    }
    
    return stack.length;
};