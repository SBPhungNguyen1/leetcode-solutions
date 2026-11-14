function secondsBetweenTimes(startTime: string, endTime: string): number {
    const split1 = startTime.split(':');
    const split2 = endTime.split(':');

    const seconds1 = Number(split1[0]) * 3600 + Number(split1[1]) * 60 + Number(split1[2]);
    const seconds2 = Number(split2[0]) * 3600 + Number(split2[1]) * 60 + Number(split2[2]);

    return seconds2 - seconds1;
};