type F = (x: number) => number;

function compose(functions: F[]): F {
    let sum;
    return function(x) {
        sum = x;
        for (let i = functions.length-1; i >=0; i--) {
            sum = functions[i](sum)
        }
        return sum;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */