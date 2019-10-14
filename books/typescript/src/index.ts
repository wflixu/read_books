console.log('dkjdj');

let flag: boolean = true;

let str: string = 'tst';

// never

let a: never;
// a = undefined;

// 函数的定义

function run(): string {
    return 'run';
}

// tslint:disable-next-line:only-arrow-functions
const fun2 = function(): number {
    return 23;
};