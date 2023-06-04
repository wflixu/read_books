interface Array<T> {
    zip<U>(list: U[]): [T, U][];
}
declare function tuple<T extends unknown[]>(...ts: T): T;
