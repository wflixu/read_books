import { reactive,effect } from "./lib.js";

const obj = {};
const proto = {bar:1};
const child = reactive(obj);
const parent = reactive(proto);

Object.setPrototypeOf(child,parent);

effect(()=>{
  console.log(child.bar);
})
console.log('start change');
child.bar = 2;
 



