

// 3.5.2
// function F(param){
//     var N=function(){
//         return param;
//     };
//     param++;
//     return N;
// }

// let inner = F(123);
// console.log(inner())
// console.log(inner())

// // 3.5.2.4
// function F(){
//     var arr=[],i;
//     for(i=0;i<3;i++){
//         arr[i]=function(){
//             return i;
//         }
//     }
//     return arr;
// }

// var arr = F();
// console.log(arr[0]())
// console.log(arr[1]())
// console.log(arr[2]())

// function F2(){
//     var arr=[],i;
//     for(i=0;i<3;i++){
//         arr[i]=function(x){
//             return function(){
//               return x;
//             };
//         }(i)
//     }
//     return arr;
// }

// var arr = F2();
// console.log(arr[0]())
// console.log(arr[1]())
// console.log(arr[2]());

// 3.5.4
function setup(x){
    var i=0;
    return function(){
        return x[i++];
    }
}
var next=setup(['a','b','c']);

console.log(next());
console.log(next());

