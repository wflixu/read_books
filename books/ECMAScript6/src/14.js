// const promise=new Promise(function(resolve,reject){
//     if(true){
//         resolve(value)
//     }else{
//         reject(error);
//     }
// });

// promise.then(function(value){
//     console.log('success'+value)
// },function (error){
//     console.log('error')
// });

// function timeout(ms){
//     return new Promise((resolve,reject)=>{
//         setTimeout(resolve,ms,'done')
//     })
// }

// timeout(2000).then(value=>{
//     console.log(value);
// })

// let promise = new Promise((resolve,reject)=>{
//     console.log('promise');
//     resolve();
// });

// promise.then(function(){
//     console.log('resolved.');
// });
// console.log('hi!');

// 异步加载图片
/* function loadImageAsync(url){
    return new Promise(function(resolve,reject){
        const image = new Image();
        image.onload=function(){
            resolve(image);
        },
        image.onerror = function(){
            reject(new Error('could not load image at '+url));
        }
        image.src=url;
    });
}
 */

//  Promise 对象事现ajax 操作
/* const getJSON = function(url){
    const promise = new Promise(function(resolve,reject){
       const handler = function(){
           if(this.readyState!=4){
               return;
           }
           if(this.status===200){
               resolve(this.response);
           }else{
               reject(new Error(this.statusText));
           }
           
       };
       const client = new XMLHttpRequest();
       client.open('GET',url);
       client.onreadystatechange=handler;
       client.responseType='json';
       client.setRequestHeader('Accept','application/json');
       client.send();
    });
    return promise;
}
getJSON('/POST.JSON').then(function(json){
    console.log('content:'+json);
},function(error){
    console.log('error:'+error);
});
 */

//  Promise.try()
const f = () => console.log('now');
/* (async ()=>f())();
console.log('next');
 */
/* (
    () => new Promise(
        resolve => resolve(f())
    )
)(); */

Promise.try(f);
console.log('next');
