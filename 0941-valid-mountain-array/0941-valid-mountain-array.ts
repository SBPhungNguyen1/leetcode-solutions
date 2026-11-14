function validMountainArray(arr: number[]): boolean {
    if (arr.length < 3) return false;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
    }

    const index = arr.indexOf(max);

    if (index === 0 || index === arr.length-1)  return false;

    for (let i = index; i > 0; i--){
        if (arr[i] <= arr[i-1])
            return false;
    }
    for (let i = index; i < arr.length-1; i++){
        if (arr[i] <= arr[i+1])
            return false;
    }
    return true;
};