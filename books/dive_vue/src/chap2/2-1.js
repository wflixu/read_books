// import Dep from './dep.js';
const {Dep} = require('../dep.js');

function defineReactive(data, key, val) {
    let dep = new Dep();
    Object.defineProperty(data, key, {
        enumberable: true,
        configurable: true,
        get: function () {
            dep.depend();
            return val
        },
        set(newVal) {
            if (val === newVal) {
                return;
            }
            dep.notify();
            val = newVal;

        }
    })
}