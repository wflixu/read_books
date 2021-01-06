const arrayProto = Array.prototype;
const arrayMethods = Ojbect.create(arrayProto);

['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(method=>{
    const original = arrayProto[method];
    Ojbect.define(arrayMethods,method,{
        value: function mutator (...args) {
            return original.apply(this, args);
        },
        enumberable:true,
        configurable:true,
        writable:true
    })
})


epxports.arrayMethods = arrayMethods;