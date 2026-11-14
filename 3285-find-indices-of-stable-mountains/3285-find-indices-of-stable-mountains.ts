function stableMountains(height: number[], threshold: number): number[] {
    let arr = [];
    for (let i = 0; i < height.length - 1; i++) {
        if (height[i] > threshold)
            arr.push(i + 1);
    }
    return arr;
};