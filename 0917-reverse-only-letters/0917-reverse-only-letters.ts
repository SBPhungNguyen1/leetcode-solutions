function reverseOnlyLetters(s: string): string {
    let str = s.split('')
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        while ((left < right) && !((str[left] >= 'a' && str[left] <= 'z') || (str[left] >= 'A' && str[left] <= 'Z')))
            left++;
        while ((left < right) && !((str[right] >= 'a' && str[right] <= 'z') || (str[right] >= 'A' && str[right] <= 'Z')))
            right--;
        if (left === right) break;
        const temp = str[left];
        str[left] = str[right];
        str[right] = temp;
        left++;
        right--;
        console.log(left, right)
    }
    return str.join('');
};