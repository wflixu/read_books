import { appendFile, readFile } from "fs";

// import * as Redis from 'redis'
// import { appendFile, readFile } from "fs/promises";

// setTimeout(() => {
//    console.info('A',1); 
//    console.info('B',2); 
// }, );

// console.info('C')


readFile('./data/log', {encoding:'utf8'}, (error, data)=>{
   if(error){
      console.error("error reading!", error)
   }
   console.info("success reading" , data)
})
appendFile('./data/log', 'new access log entry', 
  (err) =>{
   console.error('error writing!', err)
  }
 )

//  function appendAndReadPromise(path: string, data: string):Promise<string> {
//    return appendFile(path,data).then(()=>{
//      return readFile(path); 
//    }).catch(err => console.error(err))
//  }

//  function appendAndRead(path:string, data:string, cb: (error:Error|null, result: string| null) => void) {
//    appendFile(path, data , err => {
//       if(err){
//          return cb(err,null)
//       }
//    })
//    readFile(path, (error, result) =>{
//       if(error){
//          return cb(error,null)
//       }
//       cb(null, result.toString())
//    })
//  }

// class MyPromise<T> {
//    constructor(f:Executor<T>){}
//    then<U> (g:(result: T)=> MyPromise<U>):MyPromise<U>
//    catch<U>(g: (error: unknown)=> MyPromise<U>):MyPromise<U>
// }
 
// type Executor<T> = (
//    resolve:(result:T) => void, 
//    reject:(error: unknown)=> void
//    ) => void



// function readFilePromise(path:string): Promise<string> {
//    return new MyPromise((resolve, reject) => {
//       readFile(path,(error, result)=> {
//          if(error){
//             reject(error);
//          }else {
//             resolve(result as string)
//          }
//       })
//    })
// }


// let a : () => MyPromise<string, TypeError>
// let b: (s:string) => MyPromise<number, never>
// let c: () => MyPromise<boolean, RangeError>

// a().
// then(b)
// .catch(e => c())
// .then(result => console.info('Done', result))
// .catch(e => console.error("Error", e))



//  appendFileP('./data/log', '\n new access log by promise').then(res=>{
//    console.info('appendFileP:', res)
//  })
 
//  async1((err1,res1) => {
//    if(res1 ){
//       async2((res1, (err2, res2)=>{
//          if(res2){
//             async3(res3,(err3,res3)=>{
//                // ...
//             })
//          }
//       }))
//    }
//  })



// let p = new Promise<number>((resolve, reject) => {
//     setTimeout(() => {
//         resolve(122);
//     }, 1000);
// })

// p.then(res => {
//     console.log('res:', res);
// });



// 8.4

// function getUser() {
//    getUserId(18)
//    .then(user => getLocation(user))
//    .then((location) => console.info('got location', location))
//    .catch(error => console.error(error))
//    .finally(() => console.info('done getting location'))
// }


// async function getUser2() {
//    try {
//       let user = await getUserId(18)
//       let location = await getLocation(user)
//       console.info('got location', user)
//    } catch (error) {
//       console.error(error)
//    } finally {
//        console.info('done getting location')
//    }
// }


// interface Emitter {
//    emit(channel:string, value: unknown): void
//    on(channel: string, f:(value:unknown) => unknown):void
// }

// let client = Redis.createClient();
// client.on('ready', () => {
//    console.info('Client is ready')
// })
// client.on('error', e => console.error('An error occurred!', e))
// client.on('reconnecting', params => console.info('Reconnecting ... ', params))

// // type RedisClient = {
// //    on(event: 'ready', f:()=> void):void
// //    on(event:'error', f:(e:Error) => void):void
// //    on(event: 'reconnecting', f: (params: { attempt: number, delay: number}) =>void): void
// // }

// type Events = {
//    ready:void
//    error: Error
//    reconnecting: {attempt:number,delay:number}
// }

// type RedisClient = {
//    on<E extends keyof Events>(event:E, f:(args: Events[E]) => void):void
//    emit<E extends keyof Events>(
//       event:E,
//       arg: Events[E]
//    ):void
// }

type Matrix = number[][]
type MatrixProtocol = {
   determinant: {
      in: [Matrix],
      out: number
   }
   dotProduct: {
      in:[Matrix, Matrix],
      out: Matrix
   }
   invert: {
      in:[Matrix],
      out: Matrix
   }
}
type Protocol = {
   [command:string]:{
      in: unknown[]
      out:unknown
   }
}

function createProtocol<P extends Protocol>(script:string){
   return <K extends keyof P>(command:K) =>(...args:P[K]['in']) => new Promise<P[K]['out']>((resolve, reject) =>{
      let worker = new Worker(script);
      worker.onerror = reject;
      worker.onmessage = event => resolve(event.data.data)
      worker.postMessage({command,args})
   })
}

let runWithMatrixProtocol = createProtocol<MatrixProtocol>('matrix-worker-script.js')
let pararelDeterminat = runWithMatrixProtocol('invert')
pararelDeterminat([[1,2], [3, 5]]).then(
   determinat => console.log(determinat)
);




