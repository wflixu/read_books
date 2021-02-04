import { Queue } from './class.js';
import { dance, Dancer, getDancers,displayArr,distribute,collect } from './5.js';
import { print } from './common.js';
// test program
// var q = new Queue();
// q.enqueue('Meredith');
// q.enqueue('Cynthia');
// q.enqueue('Jennifer');
// print(q.toString());
// q.dequeue();
// print(q.toString());
// print('Front of queue: ' + q.front());
// print('Back of queue: ' + q.back());

// let mockData = `F Allison McMillan
// M Frank Opitz
// M Mason McMillan
// M Clayton Ruff
// F Cheryl Ferenback
// M Raymond Williams
// F Jennifer Ingram
// M Bryan Frazer
// M David Durr
// M Danny Martin
// F Aurora Adney`;

// let maleDancers = new Queue();
// let femaleDancers = new Queue();
// getDancers(maleDancers, femaleDancers, mockData);
// dance(maleDancers, femaleDancers);

// if (!femaleDancers.empty()) {
//     print(`${femaleDancers.front().name} is waiting to dance.`);
// }

// if(!maleDancers.empty()) {
//     print(`${maleDancers.front().name} is waiting to dance.`);
// }


let queues = [];
for (let i = 0; i < 10; ++i) {
    queues[i] = new Queue();
}
var nums = [];
for (let i = 0; i < 10; ++i) {
    nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
print('Before radix sort: ');
displayArr(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
print('\n\nAfter radix sort: ');
displayArr(nums);



