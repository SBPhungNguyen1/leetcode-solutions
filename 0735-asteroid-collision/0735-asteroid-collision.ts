function asteroidCollision(asteroids: number[]): number[] {
    const stack = [];

    for (const item of asteroids) {
        let alive = true;

        while (alive && item < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {
            const prev = stack[stack.length - 1];

            if (prev < Math.abs(item)) {
                stack.pop();
            } else if (prev === Math.abs(item)) {
                stack.pop();
                alive = false;
            } else {
                alive = false;
            }
        }

        if (alive) {
            stack.push(item);
        }
    }

    return stack;
}