function canRemoveAll(types: number[], colors: number[], groupSize: number[]): boolean {
    const stack: {
        type: number;
        color: number;
        count: number;
    }[] = [];

    for (let i = 0; i < types.length; i++) {
        const type = types[i];
        const color = colors[i];

        const top = stack[stack.length - 1];

        if (top && top.type === type && top.color === color) 
            top.count++;
        else
            stack.push({type, color, count: 1});

        const current = stack[stack.length - 1];
        if (current.count === groupSize[type])
            stack.pop();
    }
    return stack.length === 0;
};