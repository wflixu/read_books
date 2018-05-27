/* const MyClass = class Me{
    getClassName(){
        return Me.name;
    }
}

let inst = new MyClass();
console.log(inst.getClassName());
console.log(MyClass.name); */

/* let person = new class{
    constructor(name){
        this.name = name;
    }
    sayName(){
       console.log(this.name);
    }
}('张三');
person.sayName(); */

/* class Logger{
    constructor(){
        this.printName=this.printName.bind(this);
    }
}
class Logger{
    constructor(){
        this.printName = (name='name')=>{
            this.print(`hell${name}`);
        }
    }
} */


/* class Foo{
    constructor(...args){
        this.args=args;
    }
    *[Symbol.iterator](){
        for(let arg of this.args){
            yield arg;
        }
    }
}

for(let x of new Foo('hello','world')){
    console.log(x);
} */

/* class Foo{
    static classMethod(){
        console.log('hello');
        return 'hello';
    }
}

Foo.classMethod();
var foo = new Foo(); */

