function judgeCircle(moves: string): boolean {
    const chars = moves.split('');
    let current = [0,0];
    for (let i = 0; i < chars.length; i++) {
        switch (chars[i]) {
            case 'L':
                current[0]-=1;
                break;
            case 'R':
                current[0]+=1;
                break;
            case 'U':
                current[1]+=1;
                break;
            case 'D':
                current[1]-=1;
                break;
        }
    }
    return current[0] === 0 && current[1] === 0;
};