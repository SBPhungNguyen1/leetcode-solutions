function reverseByType(s: string): string {
    const str = s.split('');
    let letter = 'qwertyuiopasdfghjklzxcvbnm';
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        while (!letter.includes(str[left]) && left < right)
            left++;
        while (!letter.includes(str[right]) && left < right)
            right--;
        if (left === right)
            break;
        const temp = str[left];
        str[left] = str[right];
        str[right] = temp;
        left++;
        right--;
    }

    left = 0;
    right = str.length - 1;
    while (left < right) {
        while (letter.includes(str[left]) && left < right)
            left++;
        while (letter.includes(str[right]) && left < right)
            right--;
        if (left === right)
            break;
        const temp = str[left];
        str[left] = str[right];
        str[right] = temp;
        left++;
        right--;
    }

    return str.join('');
};