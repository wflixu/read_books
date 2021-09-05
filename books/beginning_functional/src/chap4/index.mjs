// let gl = "global";
// import { forEeach } from "../lib.mjs";
// import { tap } from "./../lib.mjs";
// function outer() {
//   function inner() {
//     let a = 5;
//     console.log(a);
//   }
//   inner();
// }

import { once } from "../lib.mjs";

// outer();


// forEeach([1,2,3],(a)=>{
//     tap(a)(()=>{
//         console.log(a);
//     })
// });



let doPayment = once(()=>{
    console.log('payment is done');
});

doPayment();

doPayment();
