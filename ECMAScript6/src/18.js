/* const fs = require('fs');
const readFile=function(fileName){
    return new Promise(function(resolve,reject){
        fs.readFile(fileName,function(error,data){
            if(error) return reject(error);
            resolve(data);
        });
    })
}
const gen = function* (){
    const f1=yield readFile('2.js')
    const f2=yield readFile('4.js');
    console.log(f1.toString())
    console.log(f2.toString())
}

let it = gen();
it.next();
it.next(); */

/* async function getTitle(url){
    let response =await fetch(url);
    let html = await response.text();
    return html.match(/<title>([\s\S]+)<\/title>/i)[i];
}
getTitle('https://tc39.github.io/ecma262').then(console.log);

 */

 async function f ( ){
     return await 123;
 }
 f().then(v=>console.log(v));