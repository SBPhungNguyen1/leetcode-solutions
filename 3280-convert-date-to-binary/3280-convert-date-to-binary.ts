function convertDateToBinary(date: string): string {
    const arr = date.split("-");
    const result = [];
    for (let i = 0; i < arr.length; i++)
        result.push((+arr[i]).toString(2));
    return result.join("-");
};