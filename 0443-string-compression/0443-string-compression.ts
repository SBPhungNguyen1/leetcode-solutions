function compress(chars: string[]): number {
    let result = [];
    let cur = chars[0];
    let count = 1;
    for (let i = 1; i < chars.length; i++) {
        if (chars[i] === cur) {
            count++;
        } else {
            if (count === 1) {
                result.push(cur);
            } else {
                result.push(cur);
                const newCount = count.toString();
                for (let j = 0; j < newCount.length; j++)
                    result.push(newCount[j]);
            }
            cur = chars[i];
            count = 1;
        }
    }
    if (count === 1) {
        result.push(cur);
    } else {
        result.push(cur);
        const newCount = count.toString();
        for (let j = 0; j < newCount.length; j++)
            result.push(newCount[j]);
    }
    
    chars.length = 0;
    for (const item of result) {
        chars.push(item);
    }
    return result.length;
};