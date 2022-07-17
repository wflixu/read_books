let activeEffect;

const bucket = new WeakMap();
const ITERATE_KEY = Symbol();
const effectStack = [];

const TriggerType = {
  SET: "SET",
  ADD: "ADD",
  DELETE: "DELETE",
};

export function reactive(obj) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      if (key === "raw") {
        return target;
      }

      track(target, key);
      return Reflect.get(target, key, receiver);
    },
    set(target, key, value, receiver) {
      const oldVal = target[key];
      const type = Object.prototype.hasOwnProperty.call(target, key)
        ? TriggerType.SET
        : TriggerType.ADD;
      const res = Reflect.set(target, key, value, receiver);
      if (target === receiver.raw) {
        if (oldVal !== value && (oldVal == oldVal || value == value)) {
          trigger(target, key, type);
        }
      }

      return res;
    },
    has(target, key) {
      track(target, key);
      return Reflect.has(target, key);
    },
    ownKeys(target) {
      track(target, ITERATE_KEY);
      return Reflect.ownKeys(target);
    },
    apply(target, thisArg, args) {
      target.call(this.thisArg, ...args);
    },
    deleteProperty(target, key) {
      const hadKey = Object.prototype.hasOwnProperty.call(target, key);

      const res = Reflect.deleteProperty(target, key);
      if (res && hadKey) {
        trigger(target, key, TriggerType.DELETE);
      }
      return res;
    },
  });
}

export function trigger(target, key, type) {
  const depsMap = bucket.get(target);
  if (!depsMap) return;
  const effects = depsMap.get(key);

  const effectRun = new Set(effects);

  effects &&
    effects.forEach((effectFn) => {
      if (effectFn !== activeEffect) {
        effectRun.add(effectFn);
      }
    });
  if (type == TriggerType.ADD || type == TriggerType.DELETE) {
    const iterateEffects = depsMap.get(ITERATE_KEY);
    iterateEffects &&
      iterateEffects.forEach((effectFn) => {
        if (effectFn !== activeEffect) {
          effectRun.add(effectFn);
        }
      });
  }

  effectRun.forEach((effectFn) => {
    if (effectFn.options.scheduler) {
      effectFn.options.scheduler(effectFn);
    } else {
      effectFn();
    }
  });
}

export function track(target, key) {
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

function effect(fn, options = {}) {
  const effectFn = () => {
    cleanup(effectFn);

    activeEffect = effectFn;
    effectStack.push(effectFn);

    const res = fn();
    effectStack.pop();

    activeEffect = effectStack[effectStack.length - 1];

    return res;
  };
  effectFn.options = options;
  effectFn.deps = [];
  if (!options.lazy) {
    effectFn();
  }
  return effectFn;
}

function cleanup(effectFn) {
  for (let i = 0; i < effectFn.deps.length; i++) {
    const deps = effectFn.deps[i];
    deps.delete(effectFn);
  }

  effectFn.deps.length = 0;
}

export { effect };
