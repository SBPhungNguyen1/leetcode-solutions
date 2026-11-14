function numberOfLines(widths: number[], s: string): number[] {
    let lines = 1;
    let currentWidth = 0;

    for (let i = 0; i < s.length; i++) {
        const charWidth = widths[s.charCodeAt(i) - 97]; // 'a'.charCodeAt(0) === 97

        if (currentWidth + charWidth > 100) {
            lines++;
            currentWidth = charWidth;
        } else {
            currentWidth += charWidth;
        }
    }

    return [lines, currentWidth];
}