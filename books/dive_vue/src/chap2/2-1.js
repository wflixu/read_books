// import Dep from './dep.js';
import { Dep } from '../dep.js';

export function defineReactive(data, key, val) {
    let dep = new Dep();
    Object.defineProperty(data, key, {
        enumberable: true,
        configurable: true,
        get: function () {
            console.log('get---')
            dep.depend();
            return val
        },
        set(newVal) {
            console.log('setvalue',newVal);
            if (val === newVal) {
                return;
            }
            for(let i =0;i<dep.length;i++){
                dep[i](newVal,val);
            }
            dep.notify();
            val = newVal;

        }
    })
}


