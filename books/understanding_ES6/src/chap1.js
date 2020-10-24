const { log } = console;
// let  msg = "hello world !";
// console.log(msg.startsWith('hello'));
// console.log(msg.endsWith('!'));
// console.log(msg.includes('o'));
// console.log(msg.startsWith('0'));


// console.log('x'.repeat(5));

// log('hello'.repeat(2));
// log('abc'.repeat(4))


// let text = 'hello1 hello2 hello3',
// pattern  = /hello\d\s?/,
// result = pattern.exec(text),
// globalPattern = /hello\d\s?/g,
// globalResult = globalPattern.exec(text),
// stickyPattern = /hello\d\s?/y,
// stickyResult = stickyPattern.exec(text);

// log(result[0]);
// log(globalResult[0]);
// log(stickyResult[0]);

// pattern.lastIndex = 1;
// globalPattern.lastIndex = 1;
// stickyPattern.lastIndex =1;


// result = pattern.exec(text);
// globalResult = globalPattern.exec(text);
// stickyResult = stickyPattern.exec(text);

// log(result[0]);
// log(globalResult[0]);
// log(stickyResult[0]);


// let reg = /ab/ig;
// log(reg.source);
// log(reg.flags)

// let message = 'multiline \n\
// string';

// log(message);

// let msg = `multiline 
//     string
// `;

// log(msg);

// function* createIterator() {
//     let first = yield 1;
//     let second = yield first + 2;
//     yield second + 3;
// }

// let it = createIterator();

// log(it.next());
// log(it.next(4));
// log(it.next(5));
// log(it.next())


class Collection {
    constructor(){
        this.items = [];
    }

    *[Symbol.iterator](){
        yield *this.items.values();
    }
}


let collection = new Collection();
collection.items.push(1,3,4);


for (let x of collection){
    log(x);
}