import {defineReactive } from './chap2/2-1.js';


window.target ={
    update(newVal,val){
        console.log('newVal',newVal);
        console.log('val', val);
    }
} ;
let data = {}

defineReactive(data, 'name', 'foo');
defineReactive(data, 'id', 237874);

console.log(data.name);
data.name = 'bar';
data.id = data.id+23;