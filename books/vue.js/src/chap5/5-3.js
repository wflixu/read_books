import { reactive,effect } from "./lib.js";

const obj = {foo:1};

const p = reactive(obj);

// effect(()=>{
//    'foo' in obj
// })

// console.log(p.foo);
// delete p.foo;
// console.log(p.foo);

effect(()=>{
    for(const key in p) {
        console.log(key);
    }
})
console.log('start mutate');
p.bar = 2;

p.foo = 3;
console.log('delete');
delete p.foo

