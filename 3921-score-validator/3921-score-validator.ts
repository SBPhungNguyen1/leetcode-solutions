function scoreValidator(events: string[]): number[] {
    let score = 0;
    let counter = 0;
    for (let i = 0; i < events.length; i++) {
        if (events[i] === 'W') {
            counter++;
        } else if (events[i] === 'WD') {
            score++;
        } else if (events[i] === 'NB') {
            score++;
        } else {
            score += Number(events[i]);
        }
        if (counter === 10)
            break;

    }
    return [score, counter];
};