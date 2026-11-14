type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
    return new Promise((resolve, reject) => {
        const results: T[] = [];
        let remaining = functions.length;

        if (remaining === 0) return resolve([]);

        for (let i = 0; i < functions.length; i++) {
            functions[i]()
                .then((value) => {
                    results[i] = value;
                    remaining--;
                    if (remaining === 0)
                        resolve(results);
                })
                .catch((error) => reject(error));
        }
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */