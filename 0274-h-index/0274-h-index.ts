function hIndex(citations: number[]): number {
    citations.sort((a, b) => a - b) // min -> max
    console.log(citations);
    for (let i = 0; i < citations.length; i++) {
        const paper = citations.length - i;
        if (citations[i] >= paper) return paper;
    }
    return 0;
};