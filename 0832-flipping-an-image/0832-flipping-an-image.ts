function flipAndInvertImage(image: number[][]): number[][] {
    for (const row of image) {
        let left = 0;
        let right = row.length - 1;
        while (left < right) {
            const temp = row[left];
            row[left] = row[right];
            row[right] = temp;
            left++;
            right--;
        }
        for (let i = 0; i < row.length; i++) {
            row[i] = row[i] === 0 ? 1 : 0;
        }
    }
    return image;
};