function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            const isLeftEmpty = (i === 0 || flowerbed[i - 1] === 0);
            const isRightEmpty = (i === flowerbed.length - 1 || flowerbed[i + 1] === 0);

            if (isLeftEmpty && isRightEmpty) {
                flowerbed[i] = 1;
                n--;
                
                if (n <= 0) return true;
            }
        }
    }

    return n <= 0;
};