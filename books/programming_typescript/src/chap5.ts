// type Color = "Black" | "White";
// type File = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
// type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

// class Position {
//   constructor(private file: File, private rank: Rank) {}
// }

// abstract class Piece {
//   protected position: Position;
//   constructor(private readonly color: Color, file: File, rank: Rank) {
//     this.position = new Position(file, rank);
//   }

//   moveTo(position: Position) {
//     this.position = position;
//   }

//   abstract canMoveTo(position: Position): boolean ;
// }

// class King extends Piece {
//     constructor( color: Color, file: File, rank: Rank) {
//         super(color, file, rank);
//     }
//     canMoveTo(position: Position): boolean {
//         return true
//     }
// }
// class Queen extends Piece {
//     canMoveTo(position: Position): boolean {
//         return true
//     }
// }
// // 象
// class Bishop extends Piece {
//     canMoveTo(position: Position): boolean {
//         // super.moveTo()
//         return true
//     }
// }
// // 骑士
// class Knight extends Piece {
//     canMoveTo(position: Position): boolean {
//         return true
//     }
// }
// // 车
// class Rook extends Piece {
//     canMoveTo(position: Position): boolean {
//         return true
//     }
// }
// class Pawn extends Piece {
//     canMoveTo(position: Position): boolean {
//         return true
//     }
// } //兵，卒

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

// let set  = new Set();
// set.add(1).add(2).add(3);
// console.log(set.has(1));
// console.log(set.has(4));

// class MySet {
//     has(value:number):boolean {
//       return true
//     }
//     add(value:number):this {
//         // ...
//       return this;
//     }
//   }

// class MutableSet extends MySet {
//     delete(value:number):boolean {
//       return true;
//     }
//   }

//   let myset = new MutableSet();
//   myset.add(2).add(2)

// type Sushi = {
//     calories:number
//     salty:boolean
//     tasty: boolean
// }

// interface Sushi {
//     calories:number
//     salty:boolean
//     tasty: boolean
//   }

// type
// type Food = {
//   calories: number;
//   tasty: boolean;
// };

// type Sushi = Food & {
//   salt: boolean;
// };

// type Cake = Food & {
//   sweet: boolean;
// };

// interface
// interface Food {
//   calories: number;
//   tasty: boolean;
// }
// interface Food {
//    sweet:boolean
// }

// let foo:Food;
// foo.

// interface Sushi extends Food {
//   salt: boolean;
// }
// interface Cake extends Food {
//   sweet: boolean;
// }

// type A = number;
// type B = A | string;

// interface A {
//     good(x: string): string;
//     bad(x: number): string;
//   }

//   interface B extends A {
//       good(x: string | number): string
//       bad(x: string): string
//   }

// 3
// type Set = number []

// interface User {
//     name:string
//   }
//   interface User {
//     age:number
//   }
//   let a:User = {
//     name:'Ashley',
//     age: 18
//   }

// type

//   type User = {
//     name: string
//   }
//   type User = {
//     age: number
//   }

// interface User  {
//     age: string
//   }
//   interface User {
//     age: number
//   }

//   // 泛型
//   interface User<Age extends string>  {
//     age: Age
//   }
//   interface User<Age extends number> {
//     age: Age
//   }

// interface Animal {
//   eat(food: string): void;
//   sleep(hours: number): void;
// }

// class Cat implements Animal {
//   eat(food: string): void {
      
//   }
//   sleep(hours: number): void {}
// }


// interface Animal {
//     readonly name:string
//     eat(food:string):void
//     sleep(hours:number):void
//   }
  
//   interface Feline {
//     meow ():void
//   }
  
//   class Cat implements Animal,Feline {
//     name = 'wgusjers'
//     eat(food: string): void {
        
//     }
//     sleep(hours: number): void {
        
//     }
//     meow(): void {
        
//     }
//   }



//   class Zebra {
//     trot() {}
//   }
  
//   class Poodle {
//     trot () {}
//   }
  
//   function ambleAround(animal: Zebra) {
//     animal.trot()
//   }
  
//   let zebra = new Zebra;
//   let poodle = new Poodle;
  
//   ambleAround(zebra)
//   ambleAround(poodle)

// class A {
//     private x = 1
//   }
//   class B extends A {}
  
//   function fn(a:A) {}
  
//   fn(new A) // ok
//   fn(new B)  // ok
//   fn({x:1}) // error

// let a = 999;
// function foo() {}

// type a = number;
// interface foo {
//   ():void
// }

// class MyMap<K, V> {
//     constructor(initialKey:K, initialValue: V){
  
//     }
//     get(key:K):V {
//       return 'dd' as V;
//     }
//     set(key:K,value:V):void {
  
//     }
  
//     merge<K1,V1>(map:MyMap<K1, V1>):MyMap<K|K1, V|V1>{
//       return this;
//     }
    
//     static of<K, V> (k:K, v:V):MyMap<K, V> {
//       return new MyMap(k,v)
//     }
  
//   }
  
//   interface MyMap <K, V> {
//     get(k:K) :V
//     set(k:K, v:V):void
//   }
  
//   let a = new MyMap<string ,number >('k', 1);
//   let b = new MyMap('b', true);
  
//    a.get('key')
//    b.get('b')

// type ClassConstructor<T> = new (...args:any[]) => T

// function withEZDebug<C extends ClassConstructor<{
//     getDebugValue():object
//   }>>(Class:C) {
//     return class extends Class {
//       constructor(...args:any[]){
//         super(...args) 
//       }
//       debug() {
//         let Name = Class.constructor.name;
//         let value = this.getDebugValue()
//         return  `${Name}(${JSON.stringify(value)})`
//       }
//     }
//   }
  
  
  
//   class HardToDebugUser{
//     constructor(private id:number, private firstName:string, private lastName: string) {
  
//     }
//     getDebugValue(){
//       return {
//         id: this.id,
//         name: `${this.firstName} ${this.lastName}`
//       }
//     }
//   }
  
//   let User = withEZDebug(HardToDebugUser);
//   let user = new User(3, 'Emma', 'Gluzman');
//   console.log(user.debug())

type Payload = Record<string,any>
type ClassConstructor<T> = new(...args:any[]) => T

function serializable <T extends ClassConstructor<{getValue():Payload}>>(Constructor:T){
  return class extends Constructor {
    serizlize() {
      return this.getValue().toString();
    }
  }
}
// 示例提示报错
@serializable
class APIPayload {
  getValue():Payload {
    return {} 
  }
}

// let APIPayloadddd = serialize(class APIPayload {
//   getValue():Payload {
//     return {} 
//   }
// } )

class MessageQueue {
    private constructor(private message:string[]){}
    static create(messge:string[]){
      return new MessageQueue([])
    }
  }
  
//   class BadQueue extends MessageQueue {}
//   new MessageQueue([])
  
//   MessageQueue.create([])

// 工厂模式
type Shoe = {
    purpose:string
  }
  class BalletFlet implements Shoe {
    purpose = 'dancing';
  }
  
  class Boot implements Shoe {
    purpose: string = 'woodcutting';
  }
  
  class Sneaker implements Shoe {
    purpose: string = 'walking';
  }
  
  let Shoe  = {
    create( type: 'BalletFlet'|'Boot'|'Sneaker'):Shoe{
      switch (type){
        case 'BalletFlet': return new BalletFlet
        case "Boot": return new Boot
        case "Sneaker": return new Sneaker
      }
    }
  }
  
  Shoe.create('Boot')


  class RequestBuilder {
    private data:object|null = null;
    private method: 'get'| 'post'| null = null
    private url:string|null = null
    setMethod(method: 'get'| 'post'):this{
      this.method = method;
      return this;
    }
    setData(data:object):this {
      this.data = data;
      return this;
    }
    setURL(url:string):this {
      this.url = url;
      return this;
    }
    send():void {

    }
  }
  
  new RequestBuilder().setURL('/users').setMethod('post').setData({firstName:'Anna'}).send()