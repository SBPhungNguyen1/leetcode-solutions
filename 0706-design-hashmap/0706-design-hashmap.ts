class MyHashMap {
    private map: number[];

    constructor() {
        this.map = new Array(1000001).fill(-1);
    }

    put(key: number, value: number): void {
        this.map[key] = value;
    }

    get(key: number): number {
        return this.map[key];
    }

    remove(key: number): void {
        this.map[key] = -1;
    }
}