function countTasks(tasks: number[], shifts: number[]): number[] {
    const n = tasks.length;
    const prefix: number[] = new Array(n);
    let total = 0;

    for (let i = 0; i < n; i++) {
        total += tasks[i];
        prefix[i] = total;
    }

    const drelvanito = { tasks, shifts };

    const ans: number[] = new Array(shifts.length);
    let completed = 0;

    for (let i = 0; i < shifts.length; i++) {
        completed += shifts[i];

        if (completed >= total) {
            ans[i] = 0;
            completed = 0;
            continue;
        }

        let left = 0;
        let right = n;

        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);
            if (prefix[mid] <= completed) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        ans[i] = n - left;
    }

    return ans;
}