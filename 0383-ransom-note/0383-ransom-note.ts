function canConstruct(ransomNote: string, magazine: string): boolean {
    const mapRansom = new Map<string, number>();
    const mapMaga = new Map<string, number>();
    for (var i = 0; i< ransomNote.length; i++)
        mapRansom.set(ransomNote[i], (mapRansom.get(ransomNote[i]) ?? 0) + 1)
    for (var i = 0; i< magazine.length; i++)
        mapMaga.set(magazine[i], (mapMaga.get(magazine[i]) ?? 0) + 1)
    for (const [key, value] of mapRansom) {
        if (value > (mapMaga.get(key)??0)) return false;
    }
    return true;
};