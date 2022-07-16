import {jobQueue,flushJob} from './queue.js'

const bucket = new WeakMap();
const data = { text: "hello world", ok: true, foo: 1, bar: true };
let activeEffect;

const effectStack = [];

const obj = new Proxy(data, {
  get(target, key) {
    track(target, key);

    return target[key];
  },
  set(target, key, value) {
    target[key] = value;

    trigger(target, key);
    return true;
  },
});

function track(target, key) {
  if (!activeEffect) {
    return;
  }

  let depsMap = bucket.get(target);
  if (!depsMap) {
    bucket.set(target, (depsMap = new Map()));
  }

  let deps = depsMap.get(key);
  if (!deps) {
    depsMap.set(key, (deps = new Set()));
  }

  deps.add(activeEffect);
  activeEffect.deps.push(deps);
}

function trigger(target, key) {
  const depsMap = bucket.get(target);
  if (!depsMap) return;
  const effects = depsMap.get(key);
  const effectRun = new Set(effects);
  effects && effects.forEach(effectFn=>{
    if(effectFn !== activeEffect){
        effectRun.add(effectFn)
    }
  })
  effectRun.forEach((effectFn) => {
    if(effectFn.options.scheduler){
        effectFn.options.scheduler(effectFn)
    }else {
        effectFn()
    }
  });
}

function effect(fn,options= {}) {
  const effectFn = () => {
    cleanup(effectFn);
    
    activeEffect = effectFn;
    effectStack.push(effectFn)

    fn();
    effectStack.pop();

    activeEffect = effectStack[effectStack.length-1]
  };
  effectFn.options = options;
  effectFn.deps = [];

  effectFn();
}

function cleanup(effectFn) {
  for (let i = 0; i < effectFn.deps.length; i++) {
    const deps = effectFn.deps[i];
    deps.delete(effectFn);
  }

  effectFn.deps.length = 0;
}

// effect(() => {
//   console.log("effect");
//   document.body.innerText = obj.ok ? obj.text : "not";
// });

// let temp1, temp2;

// effect(() => {
//   console.log("effectfn1 执行");
//   effect(function Fn2() {
//     console.log("effectfn2 执行");
//     temp2 = obj.bar;
//   });

//   temp1 = obj.foo;
// });

// obj.foo = false;

// effect(()=>{
//     console.log(obj.foo)
// },{
//     scheduler(fn){
//         setTimeout(fn)
//     }
// })

// // effect(()=>{
// //     console.log(obj.foo)
// // })

// obj.foo++;

// console.log('结束了');

effect(()=>{
    console.log(obj.foo);
},{
    scheduler (fn){
        jobQueue.add(fn);
        
        flushJob();

    }
})

obj.foo++;
obj.foo++;


