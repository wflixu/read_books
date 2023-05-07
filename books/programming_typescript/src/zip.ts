
// declare global {
  interface Array<T> {
    zip<U>(list: U[]): [T, U][];
  }
// }

Array.prototype.zip = function <T, U>(this: T[], list: U[]): [T, U][] {
  return this.map((v, k) => {
    return tuple(v, list[k]);
  });
};

function tuple<T extends unknown[]>(...ts: T): T {
  return ts;
}
