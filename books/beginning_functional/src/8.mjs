import { Container } from "./lib.mjs";

let double = (x) => 2 * x;

let c = new Container(3).map(double).map(double);

console.log(c);
