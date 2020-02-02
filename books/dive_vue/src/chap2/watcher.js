export default class Watcher {
    constructor(vm,expOrFn,cb) {
        this.vm = vm;
        this.getter = parsePath(expOrFn);
        this.cb = cb;
        this.value = this.getter();
    }
    get(){
        window.target =this;
        let value = this.getter.call(this.vm,this.vm);
        window.target = undefined;
        return value;
    }
    update(){
        const oldValue = this.value;
        this.value = this.get();
        this.cb.call(this.vm,this.value,oldValue)
    }
    
}

const bailRE = /[^\w.$]/;
export function parsePth(path){
    if(bailRE.test(path)){
        return;
    }
    const segments = path.split('.');
    return function (obj) {
        for (let index = 0; index < segments.length; index++) {
           if(!obj){
               return;
           }
           obj =  obj[segments[index]]
        }
        return obj;
    }
}