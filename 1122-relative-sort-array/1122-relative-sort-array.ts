function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    let position = {}
    for (let i = 0; i < arr2.length; i++) {
        position[arr2[i]] = i
    }

    arr1.sort((a, b) => {
        return (position[a] ?? arr2.length + a) - (position[b] ?? arr2.length + b)
    })

    return arr1
};