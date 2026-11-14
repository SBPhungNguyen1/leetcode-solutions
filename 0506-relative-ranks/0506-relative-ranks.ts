function findRelativeRanks(score: number[]): string[] {
    const newArr : string[] = [];
    for (let i = 0; i < score.length; i++) {
        let count = 0;
        for (let j = 0; j < score.length; j++) {
            if (score[i] < score[j])
                count ++;
        }
        console.log(count);
        if (count===0) newArr.push("Gold Medal");
        else if (count===1) newArr.push("Silver Medal");
        else if (count===2) newArr.push("Bronze Medal");
        else newArr.push(String(count+1))
    }
    return newArr;
};