import { compose } from "./lib.mjs";

let splitIntoSpace = (str)=> str.split(' ');

let count = (arr)=> arr.length;

const countWords = compose(count,splitIntoSpace);

let str = 'hello you reading about composition';

let len = countWords(str);
console.log(str ,'word number:',len);