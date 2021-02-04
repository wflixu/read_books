import { print } from './common.js';

export class Dancer {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

export function getDancers(males, females, data) {
    let names = data.split('\n');
    for (let i = 0; i < names.length; i++) {
        names[i] = names[i].trim();
        let dancer = names[i].split(' ');
        let [sex, name] = dancer;
        if (sex === 'F') {
            females.enqueue(new Dancer(name, sex));
        } else {
            males.enqueue(new Dancer(name, sex));
        }

    }

}

export function dance(males, females) {
    print('The dance parters are:\n');
    while (!females.empty() && !males.empty()) {
        let person = females.dequeue();
        print('female dancer is :', person.name);
        let male = males.dequeue();
        print('male dancer is :', male.name);
    }
    print('');
}

export function distribute(nums, queues, n, digit) {
    for (let i = 0; i < n; ++i) {
        if (digit == 1) {
            queues[nums[i]%10].enqueue(nums[i]);
        } else {
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}

export function collect(queues, nums) {
    let i = 0;
    for (let digit = 0; digit < 10; ++digit) {
        while (!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }
}

export function displayArr(arr) {
    arr.forEach(item=>{
        console.log(item);
    });
}