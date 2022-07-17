import { reactive } from "./lib.js";

const fn = (name)=>{
    console.log('我是', name);
}

const pf = reactive(fn);


pf('wlx')