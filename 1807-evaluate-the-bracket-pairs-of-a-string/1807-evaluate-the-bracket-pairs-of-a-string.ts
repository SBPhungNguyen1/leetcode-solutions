function evaluate(s: string, knowledge: string[][]): string {
    const knowledgeMap = knowledge.reduce((acc, el) => {
        acc[el[0]] = el[1];
        return acc;
    }, {} as Record<string, string>);

    s = s.replace(/\([A-Za-z]*\)/g, (match) => knowledgeMap[match.substring(1, match.length - 1)] ?? '?');

    return s;
};