function wordPattern(pattern: string, s: string): boolean {
    const map1 = new Map<string, string>();
    const map2 = new Map<string, string>();
    const chars = [...pattern];
    const splitted = s.split(" ");
    console.log(chars)
    if (chars.length !== splitted.length) return false;
    for (var i = 0; i<chars.length ; i++) {
        if (!map1.get(chars[i]) && !map2.get(splitted[i])) {
            map1.set(chars[i], splitted[i]);
            map2.set(splitted[i], chars[i]);
            console.log(`At ${i} I ran into if`)
        } else if (map1.get(chars[i]) === splitted[i] && map2.get(splitted[i]) === chars[i]) {
            console.log(`At ${i} I ran into else if`)
            continue;
        }
        else {
            console.log(`At ${i} I ran into else`)
            return false
        }
    }
    return true;
};