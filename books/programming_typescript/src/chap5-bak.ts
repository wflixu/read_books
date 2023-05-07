// type Color = "Black" | "White";
// type File = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
// type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;


// class Position {
//   constructor(public file: File, public rank: Rank) {}
//   distanceFrom(position: Position) {
//     return {
//       rank: Math.abs(position.rank - this.rank),
//       file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
//     };
//   }
// }

// // class Piece {
// //   protected position: Position;
// //   constructor(private readonly color: Color, file: File, rank: Rank) {
// //     this.position = new Position(file, rank);
// //   }
// // }

// class Queen extends Piece {}
// // 象
// class Bishop extends Piece {}
// // 骑士
// class Knight extends Piece {}
// // 车
// class Rook extends Piece {}
// class Pawn extends Piece {} //兵，卒

// // 抽象类无法实例化

// // abstract class Piece {
// //     protected position: Position;
// //    constructor(private readonly color: Color, file: File, rank: Rank) {
// //     this.position = new Position(file, rank);
// //   }
// // }

// // let piece = new Piece('White', 'E', 1);

// // 抽象类中定义方法
// abstract class Piece {
//   protected position: Position;
//   constructor(private readonly color: Color, file: File, rank: Rank) {
//     this.position = new Position(file, rank);
//   }

//   moveTo(position: Position) {
//     this.position = position;
//   }

//   abstract canMoveTo(position: Position): boolean;
// }

// class King extends Piece {
//   canMoveTo(position: Position): boolean {
//     let distance = this.position.distanceFrom(position);
//     return distance.rank < 2 && distance.file < 2;
//   }
// }

// class Game {
//   private pieces = Game.makePieces();
//   private static makePieces() {
//     return [
//       // 王
//       new King("White", "E", 1),
//       new King("Black", "E", 8),
//       // 后
//       new Queen("White", "D", 1),
//       new Queen("Black", "D", 8),
//       // 象
//       new Bishop("White", "C", 1),
//       new Bishop("White", "F", 1),
//       new Bishop("Black", "C", 8),
//       new Bishop("Black", "F", 8),
//     ];
//   }
// }

// class 关键字声明类，extends 关键字扩展类
// 类可以具体，也可以抽象，抽象类可以有抽象方法和属性
// 方法的可见性 private 、 protected、 和 public （默认），实例方法和静态方法
// 属性也有可见性声明，实例属性可以在构造函数中声明，也可以通过初始化语句声明
// 实例属性可以用readonly 标记为只读

// 5.2 super

// this

// let set  = new Set();
// set.add(1).add(2).add(3);
// console.log(set.has(1));
// console.log(set.has(4));

//

// class MySet {
//   has(value:number):boolean {
//     return true
//   }
//   add(value:number):MySet {
//     return new MySet();
//   }
// }
// class MySet {
//   has(value:number):boolean {
//     return true
//   }
//   add(value:number):this {
//     return this;
//   }
// }

// class MutableSet extends MySet {
//   delete(value:number):boolean {
//     return true;
//   }
//   add(value:number):MutableSet {
//    return this;
//   }
// }


// 5.4 接口
// 接口是一种命名类型的方式
// 类型别名和接口算是同一概念的两种句法
// 二者可以互相赋值
// type Sushi = {
//   calories:number
//   salty:boolean
//   tasty: boolean
// }
// interface Sushi {
//   calories:number
//   salty:boolean
//   tasty: boolean
// }
// // 
// type Cake = {
//   calories:number
//   sweet:boolean
//   tasty:boolean
// }

// // type
// type Food = {
//   calories:number
//   sweet:boolean
// }

// type Sushi = Food & {
//   salt:boolean
// }
// type  Cake = Food & {
//   sweet:boolean;
// }

// // interface
// interface Food {
//   calories:number
//   sweet:boolean
// }

// interface Sushi extends Food  {
//   salt:boolean
// }
// interface  Cake  extends Food  {
//   sweet:boolean;
// }

// type A = number;
// type B = A | string;


// interface A {
//   good(x: string): string;
//   bad(x: number): string;
// }

// interface B extends A {
//     good(x: string | number): string
//     bad(x: string): string
// }

// type B = A & {
//   good(x: string | number): string;
//   bad(x: string): string;
// };

// type Set = number []
// interface MySet {
//   add(value:number):this
// }
// interface MySet {
//   delete(value:number):boolean
// }

// let myset:MySet;
// myset.

// interface User {
//   name:string
// }
// interface User {
//   age:number
// }
// let a:User = {
//   name:'Ashley',
//   age: 18
// }

// // type 

// type User = {
//   name: string
// }
// type User = {
//   age: number
// }

// interface User  {
//   age: string
// }
// interface User {
//   age: number
// }

// // 泛型
// interface User<Age extends string>  {
//   age: Age
// }
// interface User<Age extends number> {
//   age: Age
// }



// // implements

// interface Animal {
//   eat(food:string):void
//   sleep(hours:number):void
// }

// class Cat implements Animal {
//   eat(food: string): void {
      
//   }
//   sleep(hours: number): void {
      
//   }
// }

// // readonly

// interface Animal {
//   readonly name:string
//   eat(food:string):void
//   sleep(hours:number):void
// }

// interface Feline {
//   meow ():void
// }

// class Cat implements Animal,Feline {
//   name = 'wgusjers'
//   eat(food: string): void {
      
//   }
//   sleep(hours: number): void {
      
//   }
//   meow(): void {
      
//   }
// }

// 5.5 
// class Zebra {
//   trot() {}
// }

// class Poodle {
//   trot () {}
// }

// function ambleAround(animal: Zebra) {
//   animal.trot()
// }

// let zebra = new Zebra;
// let poodle = new Poodle;

// ambleAround(zebra)
// ambleAround(poodle)


// 
// class A {
//   private x = 1
// }
// class B extends A {}

// function fn(a:A) {}

// fn(new A) // ok
// fn(new B)  // ok
// fn({x:1}) // error

// let a = 999;
// function foo() {}

// type a = number;
// interface foo {
//   ():void
// }

// class C {}
// let c:C = new C;
// enum E{F,G}
// let e:E = E.F; 

// type State = {
//   [key:string]:string
// }
// class StringDatabase {
//   state:State = {}
//   get(key:string):string | null {
//     return key in this.state ? this.state[key]: null
//   }
//   set(key:string, value:string):void {
//     this.state[key] = value;
//   }
//   static from (state:State) {
//     let db = new StringDatabase;
//     for (const key in state) {
//       db.set(key, state[key])
//     }
//     return db;
//   }
// }

// interface StringDatabase {
//   state:State
//   get(key:string):string |null,
//   set(key:string,value:string):void
// }

// interface StringDatabaseConstructor {
//   new():StringDatabase
//   from(state:State):StringDatabase
// }

// 5.7

// class MyMap<K, V> {
//   constructor(initialKey:K, initialValue: V){

//   }
//   get(key:K):V {
//     return 'dd' as V;
//   }
//   set(key:K,value:V):void {

//   }

//   merge<K1,V1>(map:MyMap<K1, V1>):MyMap<K|K1, V|V1>{
//     return this;
//   }
  
//   static of<K, V> (k:K, v:V):MyMap<K, V> {
//     return new MyMap(k,v)
//   }

// }

// interface MyMap <K, V> {
//   get(k:K) :V
//   set(k:K, v:V):void
// }

// let a = new MyMap<string ,number >('k', 1);
// let b = new MyMap('b', true);

//  a.get('key')
//  b.get('b')

// 5.8 

// class User {

// }

// User.debug()

// type ClassConstructor = new (...args:any[]) => {}

// function withEZDebug<C extends ClassConstructor<{
//   getDebugValue():object
// }>>(Class:C) {
//   return class extends Class {
//     constructor(...args:any[]){
//       super(...args) 
//     }
//     debug() {
//       let Name = Class.constructor.name;
//       let value = this.getDebugValue()
//       return  `${Name}(${JSON.stringify(value)})`
//     }
//   }
// }


// type ClassConstructor<T> = new (...args:any[]) => T

// class HardToDebugUser{
//   constructor(private id:number, private firstName:string, private lastName: string) {

//   }
//   getDebugValue(){
//     return {
//       id: this.id,
//       name: `${this.firstName} ${this.lastName}`
//     }
//   }
// }

// let User = withEZDebug(HardToDebugUser);
// let user = new User(3, 'Emma', 'Gluzman');
// console.log(user.debug())


// 5.9 

// type Payload = Record<string,any>
// type ClassConstructor<T> = new(...args:any[]) => T

// function serializable <T extends ClassConstructor<{getValue():Payload}>>(Constructor:T){
//   return class extends Constructor {
//     serizlize() {
//       return this.getValue().toString();
//     }
//   }
// }
// // 示例提示报错
// @serializable
// class APIPayload {
//   getValue():Payload {
//     return {} 
//   }
// }

// let APIPayload = serialize(class APIPayload {
//   getValue():Payload {
//     return {} 
//   }
// } )


// 5.10 

// class MessageQueue {
//   private constructor(private message:string[]){}
//   static create(messge:string[]){
//     return new MessageQueue([])
//   }
// }

// class BadQueue extends MessageQueue {}
// new MessageQueue([]);

// MessageQueue.create([])


// 5.11 
// // 工厂模式
// type Shoe = {
//   purpose:string
// }
// class BalletFlet implements Shoe {
//   purpose = 'dancing';
// }

// class Boot implements Shoe {
//   purpose: string = 'woodcutting';
// }

// class Sneaker implements Shoe {
//   purpose: string = 'walking';
// }

// let Shoe  = {
//   create( type: 'BalletFlet'|'Boot'|'Sneaker'):Shoe{
//     switch (type){
//       case 'BalletFlet': return new BalletFlet
//       case "Boot": return new Boot
//       case "Sneaker": return new Sneaker
//     }
//   }
// }

// Shoe.create('Boot')

// class RequestBuilder {
//   private data:object|null = null;
//   private method: 'get'| 'post'| null = null
//   private url:string|null = null
//   setMethod(method: 'get'| 'post'):this{
//     this.method = method;
//     return this;
//   }
//   setData(data:object):this {
//     this.data = data;
//     return this;
//   }
//   setURL(url:string):this {
//     this.url = url;
//     return this;
//   }
// }

// new RequestBuilder().setURL('/users').setMethod('post').setData({firstName:'Anna'})

