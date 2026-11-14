function reverseDegree(s: string): number {
    const abc = 'abcdefghijklmnopqrstuvwxyz'.split('').reverse().join('');
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        sum += (i + 1) * (abc.indexOf(s[i]) + 1);
    }
    return sum;
};