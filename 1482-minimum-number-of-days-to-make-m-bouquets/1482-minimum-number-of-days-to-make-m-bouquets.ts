function minDays(bloomDay: number[], m: number, k: number): number {
    let l : number = Math.min(...bloomDay);
    let h : number = Math.max(...bloomDay);

    let ans : number = -1;
    while(l <= h){
        let mid : number = l + Math.ceil((h - l) / 2);
        if(solve(bloomDay, mid, m, k)){
            ans = mid;
            h = mid - 1;
        }
        else 
        l = mid + 1;
    }
    return ans;
};

const solve = (bloomDay : number[], days : number, m : number, k : number) : boolean => {
    let boquet : number = 0, count : number = 0;
    for(let i : number = 0; i < bloomDay.length; ++i){
        if(bloomDay[i] <= days) count++;
        else{
            boquet += Math.floor(count / k);
            count = 0;
        }
    }
    boquet += Math.floor(count / k);
    if(boquet >= m) return true;
    else return false;
}