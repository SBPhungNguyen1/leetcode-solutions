type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    const [pv1, pv2] = await Promise.all([promise1, promise2]);
    return pv1 + pv2;    
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */