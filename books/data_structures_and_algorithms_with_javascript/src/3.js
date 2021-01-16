const List = require('./List.js');

let names = new List();

// names.append('cynthia');
// names.append('raymond');
// names.append('barbara');

// console.log(names.toString());
// names.remove('raymond');
// console.log(names.toString());


names.append('cynthia');
names.append('raymond');
names.append('barbara');
names.append('jennifer');
names.append('bryan');
names.append('danny');
// names.front();

// console.log(names.getElement());

// names.next();
// names.next();
// names.prev();
// console.log(names.getElement());


for(names.front();names.curPos() < names.length(); names.next()){
    console.log(names.curPos());
    console.log(names.length());
    console.log(names.getElement());
}

