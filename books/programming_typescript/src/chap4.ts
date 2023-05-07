// function add (a:number, b:number) {
//     return a + b;
// }

// // 具名函数
// function greet(name:string){
//     return 'hello ' + name;
// }

// //函数表达式
// let greet2 = function(name:string){
//     return 'hello ' + name;
// }

// // 箭头函数表达式
// let greet3 = (name:string) => {
//     return 'hello ' + name;
// }

// // 箭头函数表达式简写
// let greet4 = (name:string) => 'hello ' + name

// // 构造函数方法
// let greet5 = new Function('name', 'return "hello " + name')

// // 调用
// // add(1, 2)
// // greet('crystal')
// // add(1)
// // add(1, 'a')

// // 可选参数
// function  log  (message: string, userId?:string) {
//     let time= new Date().toLocaleDateString();
//     console.log(time, message, userId ?? 'Not signed in')
// }

// log('Page loaded')
// log('User signed in', 'ddskjdkj')

// function  log2  (message: string, userId= 'Not signed in') {
//     let time= new Date().toLocaleDateString();
//     console.log(time, message, userId )
// }

// log2('User clicked on a button', 'dsdsas')
// log2('User signed out');

// type Context = {
//     appId?: string
//     userId?:string
// }

// function log3 (message:string, context:Context = {}) {
//     let time = new Date().toLocaleDateString();
//     console.log(time, message, context.userId)
// }

// function sum(numbers: number[]):number {
//     return numbers.reduce((pre,cur)=> pre + cur, 0)
// }

// let res = sum([1, 2, 3])
// console.log(res);

// // function sumVariadic():number {
// //    return Array.from(arguments).reduce((pre,cur)=> pre + cur, 0)
// // }

// // let res2 = sumVariadic(1, 2, 3 )

// function sumVariadicSafe(start = 0 ,...nums:number[]) {
//     return nums.reduce((pre,cur)=> pre + cur, 0)
// }

// console.log('sumVariadicSafe(1,2,3):', sumVariadicSafe(0, 1,2,3,55))

// add(10, 20)
// add.apply(null, [10,20])
// add.call(null, 10 , 20 )
// add.bind(null, 10, 20)()

// let x = {
//     a(){
//         return this;
//     }
// }

// console.log(x.a());

// let afn = x.a;
// console.log(afn())

// function fancyDate(this:Date) {
//     return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`
// }

// fancyDate.call(new Date())

// // fancyDate()

// function * createFibonacciGenerator():IterableIterator<number>{
//     let a = 0;
//     let b = 1;
//     while(true){
//         yield a;
//         [a,b]= [b, a+b]
//     }

// }

// let fibonaccGenerator = createFibonacciGenerator();
// let n = 0
// console.log(n++, fibonaccGenerator.next());
// console.log(n++, fibonaccGenerator.next());
// console.log(n++, fibonaccGenerator.next());
// console.log(n++, fibonaccGenerator.next());
// console.log(n++, fibonaccGenerator.next());
// console.log(n++, fibonaccGenerator.next());

// console.log('fibonaccGenerator------'.repeat(10));

// let numbers = {
//     *[Symbol.iterator](){
//         for(let n = 1;n<10; n++){
//             yield n;
//         }
//     }
// }

// for(let num of numbers) {
//     console.log(num);
// }

// let allNum = [...numbers];
// let [one, two, ...rest] = numbers;

// console.log(allNum, one , two, rest);

// function *createNumbers():IterableIterator<number> {
//     let n = 0;
//     while(1){
//         yield n ++
//     }
// }

// let numbersss= createNumbers();
// console.log('numbers--------');

// console.log(numbersss.next());
// console.log(numbersss.next());
// console.log(numbersss.next());

// type Log = (message:string, userId?:string) => void;
// type Greet = (name:string) => void;
// type sumVariadicSafe = (...numbers:number[]) => number

// let log5:Log = (message, userId='Not signed in') =>{
//     let time= new Date().toLocaleDateString();
//     console.log(time, message, userId)
// }

// console.log('------'.repeat(10));

// function times(fn:(index:number)=>void,n:number){
//    for (let index = 0; index < n; index++) {
//     fn(index)
//    }
// }

// times((n)=> console.log(n), 4)

// function f(n){
//     console.log(n)
// }
// times(f, 5)

// // 完整型调用签名
// type LogFull = {
//     (message:string, userId?:string) : void
// }

// type Reservation = {
//     [key:string]:any
// }
// type Reserve = {
//     (from:Date, to:Date, destination:string): Reservation
//     (from:Date, destination:string): Reservation

// }
// // test error
// // let reserve:Reserve = (from:Date, to, destination:string) => {
// //   return {destination}
// // }
// let reserve2:Reserve = (from:Date, to:Date|string, destination?:string) => {
//   return {destination}
// }

// type CreateElement = {
//    (tag:'a'):HTMLAnchorElement
//    (tag:'table'):HTMLTableElement
//    (tag:'string'):HTMLElement
// }
// document.createElement('bbb')
// //

// type WarnUser = {
//     (warning:string) : void
//     wasCalled: boolean
// }

// let warnUser: WarnUser = (warning:string) =>{
//     if(warnUser.wasCalled) {
//         return
//     }
//     warnUser.wasCalled = true;
//     alert(warning)
// }
// warnUser.wasCalled = false;

// let filter = (array,fn) => {
//     let res = [];
//     for (let index = 0; index < array.length; index++) {
//         let element = array[index];
//         if(fn(element)){
//             res.push(element)
//         }

//     }
//     return res;
// }



// type Filter = {
//   (array: unknown[], f: (item: unknown) => boolean): unknown[];
// };
// type Filter = {
//   (array: number[], f: (item: number) => boolean): number[];
// };

// type Filter = {
//     (array: number[], f: (item:number) => boolean): number[]
//     (array: string[], f: (item:string) => boolean): string[]
//     (array: object[], f: (item:object) => boolean): object[]
// }



// let filterFn: FilterFn = (array,fn) => {
//     let res = [];
//     for (let index = 0; index < array.length; index++) {
//         let element = array[index];
//         if(fn(element)){
//             res.push(element)
//         }

//     }
//     return res;
// }
// let filter: Filter = (array,f) => {
//     let res = [];
//     for (let index = 0; index < array.length; index++) {
//         let element = array[index];
//         if(f(element)){
//             res.push(element)
//         }

//     }
//     return res;
// }

// type Filter = {
//     <T>(array: T[], f: (item: T) => boolean): T[];
//   };
  

// filter([1,2,3], _ => _ > 2)

// filter(['a', 'b'], _ => _ != 'b')

// filter([
//     {   firstName:'beth'},// { firstName: string}
//     {   firstName:'caitlyn'},
//     {   firstName:'xin'},
// ], _ => _.firstName.startsWith('b'))

type Filter <T> = {
   (array: T[], f: (item:T) => boolean): T[]
}

let numberFilter: Filter<number> = (array,fn) => {
    let res = [];
    for (let index = 0; index < array.length; index++) {
        let element = array[index];
        if(fn(element)){
            res.push(element)
        }

    }
    return res;
}

type Row = Record<string, any>

// function map(array:unknown[],f:(item:unknown) => unknown):unknown[] {
//     let result = [];
//     for (let index = 0; index < array.length; index++) {
//         const element = f(array[index]);
//         result[index] = element;
//     }
//     return result;
// }

function map<T,U>(array:T[],f:(item:T) => U):U[] {
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = f(array[index]);
        result[index] = element;
    }
    return result;
}

map(['a', 'b', 'c'], _ => _ == 'a')
map<string, boolean>(['a', 'b', 'c'], _ => _ == 'a')
// map<string>(['a', 'b', 'c'], _ => _ == 'a')

// let promise = new Promise<number>(resolve =>{
//     resolve(45)
// } )
// promise.then(result =>{
//     result *4;
// })

type MyEvent<T> = {
    target: T,
    type:string
}

type ButtonEvent = MyEvent<HTMLButtonElement>

let myEvent : MyEvent<HTMLButtonElement| null>= {
    target:document.querySelector('myButton'),
    type:'click'
}

// 构建其他类型
// type TimeEvent<T> = {
//     event:MyEvent<T>,
//     from:Date,
//     to:Date,
// }

// // 泛型别名在函数签名中使用
// function triggerEvent <T>(event:MyEvent<T>):void {

// }


// type TreeNode = {
//     value: string;
// }

// type LeafNode = TreeNode & {
//     isLeaf: true
// }

// type InnerNode = TreeNode & {
//     children: [TreeNode] | [TreeNode, TreeNode]
// }

// function mapNode<T extends TreeNode>(
//     node: T,
//     f: (value: string) => string
// ): T {
//     return {
//         ...node,
//         value: f(node.value)
//     }
// }

// let a :TreeNode = {value: 'a'}
// let b :LeafNode = {value: 'b', isLeaf:true}
// let c :InnerNode = {value: 'c', children:[b]}

// let a1 = mapNode(a, _ => _.toUpperCase())
// let b1 = mapNode(b, _ => _.toUpperCase())
// let c1 = mapNode(c, _ => _.toUpperCase())

// type HasSide = { numberOfSides: number };
// type SidesHaveLength = { sideLength: number };
// function logPerimeter<Shape extends HasSide & SidesHaveLength>(s: Shape) {
//   console.log(s.numberOfSides * s.sideLength);
//   return s;
// }

// function call(f: (...args: unknown[]) => unknown, ...args: unknown[]): unknown {
//     return f(...args);
// }
// function call<T extends unknown[], R>(
//   f: (...args: T) => R,
//   ...args: T
// ): R{
//   return f(...args);
// }

// function fill(length: number, value: string): string[] {
//   return Array.from({ length }, () => value);
// }
// call(fill, 10, "a");
// call(fill, 10);
// call(fill, 10, '4', '4');

// // 泛型默认值
// type MyEvent<T = HTMLElement> = {
//     target: T,
//     type:string
// }
// // 泛型限制
// type MyEvent<T extends HTMLElement = HTMLElement> = {
//     target: T,
//     type:string
// }
// // 多个泛型，默认值放在最后面
// type MyEvent<U extends string,T extends HTMLElement = HTMLElement> = {
//     target: T,
//     type:U
// }


