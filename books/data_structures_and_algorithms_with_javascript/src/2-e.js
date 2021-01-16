let grades = {
    stores: [],
    add(grade) {
        console.log(grade);
        this.stores.push(grade);
    },
    average() {
        let total = this.stores.reduce((pre, cur) => {
            return pre + cur;
        }, 0);
        console.log(total);

        return total / this.stores.length;
    }
};

// grades.add(2);
// grades.add(3);
// grades.add(4);
// let average = grades.average();
// console.log(average);


// 2 

let words = {
    data: [],
    add(str){
        let arr = str.trim().split('');
        this.data.push(...arr);
    },
    backward() {
        return this.data.reverse().join('');
    },
    forward(){
        return this.data.join('');
    }
};

let foo = 'hello  world';

words.add(foo);

console.log(words.backward());

console.log(words.backward());
