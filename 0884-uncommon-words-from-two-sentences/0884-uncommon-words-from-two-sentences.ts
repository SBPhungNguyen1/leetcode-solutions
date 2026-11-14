function uncommonFromSentences(s1: string, s2: string): string[] {
    const mapS1 = new Map<string, number>();
    const mapS2 = new Map<string, number>();

    const arr1 = s1.split(' ');
    const arr2 = s2.split(' ');

    for (let i = 0; i < arr1.length; i++)
        mapS1.set(arr1[i], (mapS1.get(arr1[i]) ?? 0) + 1);
    
    for (let i = 0; i < arr2.length; i++)
        mapS2.set(arr2[i], (mapS2.get(arr2[i]) ?? 0) + 1);

    const arr: string[] = [];

    for (const [key, value] of mapS1) {
        if (value === 1 && !mapS2.has(key))
            arr.push(key);
    }

    for (const [key, value] of mapS2) {
        if (value === 1 && !mapS1.has(key))
            arr.push(key);
    }

    return arr;
};