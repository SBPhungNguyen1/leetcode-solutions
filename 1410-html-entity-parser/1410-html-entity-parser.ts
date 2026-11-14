function entityParser(text: string): string {
    
    const parser = {
        '&quot;' : '"',
        '&apos;' : "'",
        '&amp;'  : '&',
        '&gt;'   : '>',
        '&lt;'   : '<',
        '&frasl;':'/'
    }
    
    return text.replace(/&amp;|&quot;|&apos;|&gt;|&lt;|&frasl;/g, (t) => {
        return parser[t];
    });
};