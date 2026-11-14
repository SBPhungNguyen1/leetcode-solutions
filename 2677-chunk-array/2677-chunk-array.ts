type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function chunk(arr: Obj[], size: number): Obj[][] {
    let count = 0;
    const results = [];
    let ar = [];
    for (let i = 0; i < arr.length; i++) {
        ar.push(arr[i]);
        count++;
        if (count === size) {
            results.push(ar);
            ar = [];
            count = 0;
        }
    }
    if (ar.length !== 0)
        results.push(ar);
    return results;
};
