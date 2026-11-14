function constructRectangle(area: number): number[] {
    let mid = Math.floor(Math.sqrt(area));
    for (let i = mid; i > 0;i--){
        if(area % i === 0)
            return [Math.max(i, area/i), Math.min(i, area/i)];
    }
};