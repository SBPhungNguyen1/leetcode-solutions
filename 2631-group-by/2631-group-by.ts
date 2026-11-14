interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>
}


Array.prototype.groupBy = function(fn) {
    let obj = {};
    this.forEach((element) => {
        const key = fn(element);
        obj[key] ? obj[key].push(element) : obj[key] = [element];
    });
    return obj;
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */