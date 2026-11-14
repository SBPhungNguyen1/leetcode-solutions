function findTheLongestSubstring(s: string): number {
    const vowMap:{[key:string]:number}={'a':0,'e':1,'i':2,'o':3,'u':4};
    const firstIndexMap: Map<number, number> = new Map([[0, -1]]);
    let mask:number=0;
    let resLen:number=0;

    for(let i=0;i<s.length;i++){
        if(s[i] in vowMap){
            mask^=1<<vowMap[s[i]];
        }
        if(firstIndexMap.has(mask)){
            resLen=Math.max(resLen,i-firstIndexMap.get(mask)!);
        }else{
            firstIndexMap.set(mask, i);
        }
    }
    return resLen
};
