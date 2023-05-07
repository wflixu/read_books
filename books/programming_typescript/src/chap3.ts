// // function squareOf(n) {
// //     return n*n;
// // }

// // squareOf(2);
// // squareOf('z');

// // let a:any = 666;
// // let b:any =['danger'];
// // let cc = a+b;

// // let a = true;
// // var b = false;
// // const c = true;


// // let d: boolean = true;
// // let e:true = true;
// // let f:true = false;
// // let nn:'tom'|'lucy' = 'pile'


// // let a = 1234;
// // var b = Infinity * 0.10
// // const c = 4555;

// // let d = a<c;
// // let e: number = 100;
// // let f:26.18 = 26.18;
// // let g: 5 = 6;

// // let a = Symbol('a');
// // let b: symbol = Symbol('b');

// // const e = Symbol('e')
// // const f: unique symbol = Symbol('f')
// // let i = e === e;

// // let a: object = {
// //     b:'x'
// // }

// // a.b;

// // let a = {
// //     b: 'x'
// // }

// // let b = {
// //     c:{
// //         d: 'f'
// //     }
// // }

// // const a = {
// //     b: 12
// // }

// // let c: {
// //     firstName: string
// //     lastName: string
// // } = {
// //     firstName: 'john',
// //     lastName: 'barrowman'
// //     // foo:''
// // }

// // class Person {
// //     constructor(public firstName: string,
// //         public lastName: string) {

// //     }
// // }



// // c = new Person('matt', 'smith');

// // let st:{
// //    [key:string]: string
// // } =  {
// //     name:'zhanshan',
// //     id:'dddd',
// //     test:'ddd'
// // } 


// // let a: {b:number}
// // // a = {};

// // a = {
// //     b:1,
// //     c:2
// // }

// // let a: {
// //     b:number
// //     c?:string
// //     [key:number]:boolean
// // }

// // let danger: {}
// // danger = {};
// // danger = { x:1}
// // danger = [];
// // danger = 2;
// // type myObj = Record<string,any>
// // type myObj = 1| 2
// // type Age = number

// // type Person =  {
// //  name:string
// //  age: Age
// // }

// // let age:Age = 55;

// // let driver:Person = {
// //     name:'james may',
// //     age: age
// // }

// // type Cat = {
// //     name:string,
// //     purrs:boolean
// // }
// // type Dog = { name:string, barks:boolean, wags:boolean}

// // type CatOrDogOrBoth = Cat | Dog;

// // type CatAndDog = Cat & Dog;

// // let aa : CatAndDog= {
// //     name: 'Bonks',
// //     purrs:true,
// //     barks:false,
// //     wags:false
// // }
// // let bb : CatOrDogOrBoth= {
// //     name: 'Bonks',
// //     purrs:true,
// //     barks:false,
// //     wags:false
// // }

// // let a = [1, 2, 3, 4];
// // var b = ['a', 'b']
// // let g = [];
// // g.push(1)
// // g.push('red');
// // let arr : Array<string|number> = ['1',2]

// // function buildArray () {
// //     let a = [];
// //     a.push(1);
// // }

// // let tt:[number,string]= [1,'sddd']



// // let trainFares: [number, number?] [] = [
// //     [3.75],
// //     [8.25,7.7],
// //     [10.5],
// // ]

// // let friends : [string, ...number[]] = ['Sara', 1, 2,2,3]

// // let as: readonly number[] = [1, 2, 3];
// // let bs: readonly number[] = as.concat(4);
// // as.push(5);

// // function fnn () {
// //     throw Error('dddd')
// // }
// // function fe() {
// //     while (true) {
// //         console.log('ddd')
// //     }
// // }

// // let res = fnn();
// enum Language {
//   English,
//   Spanish,
//   Russian,
// }

// enum Color {
//   Red = "#c1000",
//   Blue = "#7acaw",
// }

// let c = Color["#c1000"];

// console.log(Language.Spanish);
// console.log(Language[1]);
