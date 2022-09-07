import { reactive,effect } from "./lib.js";

const ob = reactive({
  foo: {
    bar: 1
  }
})

effect(()=>{
  console.log(ob.foo.bar);
})
console.log('start mutate')
ob.foo.bar == 3



