import { arrayMethods } from './arrayMethods.js';

import { Dep } from './dep.js'

const hasProto = '__proto__' in {};
const arrayKeys = Object.getOwnPropertyNames(arrayMethods);
export class Observer {
    constructor(value) {
        this.value = value;
        this.dep = new Dep();
        def(value, '__ob__', this);

        if (Array.isArray(value)) {
            const augment = hasProto ? protoAugment : copyAugment;
            augment(value, arrayMethods, arrayKeys);
        } else {
            this.walk(value);
        }
    }

    walk() {
        const keys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            defineReactive(obj, keys[i], obj[keys[i]]);
        }
    }

}

function protoAugment(target, src, keys) {
    target.__proto__ = src;
}

function copyAugment(target, src, keys) {
    for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        def(target, key, src[key]);
    }
}

export function defineReactive(data, key, val) {
    if (typeof val === 'object') {
        new Observer(val);
    }
    let dep = new Dep();
    let childOb = observe(val);
    Object.defineProperty(data, key, {
        enumberable: true,
        configurable: true,
        get: function () {
            console.log('get---')
            dep.depend();
            if (childOb) {
                childOb.dep.depend();
            }
            return val;
        },
        set: function (newVal) {
            console.log('setvalue',newVal);
            if (val === newVal) {
                return
            }
            val = newVal;
            dep.notify();
        }
    })
}

function def(obj, key, val, enumberable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumberable: !!enumberable,
        writable: true,
        configurable: true
    })
}

function observe(value, asRootData) {
    if (!isObject(value)) {
        return;
    }
    let ob;
    if (hasOwn('__ob__') && value.__ob__ instanceof Observer) {
        ob = value.__ob__;
    } else {
        ob = new Observer(value);
    }
    return ob;
}

exports.Observer = Observer;
exports.defineReactive = defineReactive;

