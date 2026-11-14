function findTheDistanceValue(arr1: number[], arr2: number[], d: number): number {
    let count = arr1.length;

    for (let i = 0; i < arr1.length; ++i) {
        let shouldCount = false;
        let where = 0;

        for (let j = 0; j < arr2.length; ++j) {
            if (Math.abs(arr1[i] - arr2[j]) <= d) {
                shouldCount = true;
                where = j;
                break;
            }
        }

        if (shouldCount) {
            count--;
        }
    }

    return count;
};