"use strict";
// setTimeout(() => {
//    console.info('A',1); 
//    console.info('B',2); 
// }, );
// console.info('C')
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(122);
    }, 1000);
});
p.then(res => {
    console.log('res:', res);
});
