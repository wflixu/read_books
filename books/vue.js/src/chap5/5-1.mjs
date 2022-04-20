// const fn = (name)=>{
//     console.log(`Hello ${name}`);
// }

// const p2 = new Proxy(fn,{
//     apply(target,thisArg,argArray){
//         target.call(this,...argArray)
//     }
// })

// p2('world');

const obj = {foo:1};
console.log(Reflect.get(obj,'foo',{foo:2}));