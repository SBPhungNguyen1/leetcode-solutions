function minimumPushes(word: string): number {
    const n = word.length;
    if (n<9) return n;
    const maxTimes = Math.ceil(n/8); // as we can map to max 8 keys;
    const remain = n%8;
    console.log(maxTimes);
    console.log(remain);
    let sum = 0;
    for (var i = 1; i < maxTimes; i++){
        sum+=i;
    }
    console.log(sum);
    return remain===0 ? (sum+i)*8 : sum*8 + remain*i;
};


// example <9 -> n        maxTimes: 1;
// 9->16: n + 2n          maxTimes: 2;
// 17->24: n + 2n +3n     maxTimes: 3;