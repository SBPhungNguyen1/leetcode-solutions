function shortestBeautifulSubstring(s: string, k: number): string {
    const arr: number[] = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') arr.push(i);
    }
    
    if (arr.length < k) return "";
    
    let ans = "";
    
    for (let i = 0; i <= arr.length - k; i++) {
        const sub = s.slice(arr[i], arr[i + k - 1] + 1);
        
        if (
            ans === "" || 
            sub.length < ans.length || 
            (sub.length === ans.length && sub < ans)
        ) {
            ans = sub;
        }
    }
    
    return ans;
}