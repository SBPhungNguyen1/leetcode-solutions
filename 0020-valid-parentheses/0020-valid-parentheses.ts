function isValid(s: string): boolean {
    const arr = [];
    const left = '({[';
    const right = ')}]';

    for(let i = 0; i < s.length; i++) {
        if (left.includes(s[i]))
            arr.push(s[i]);
        else {
            const item = arr.pop();
            const index = right.indexOf(s[i]);
            console.log(item)
            if (item !== left[index])   return false;
        }
    }
    return arr.length === 0;
};