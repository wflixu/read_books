export class List {
    constructor() {
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];
    }
    clear() {
        this.dataStore = [];
        this.listSize = this.pos = 0;
    }
    find(item) {
        return this.dataStore.indexOf(item);
    }
    toString() {
        return this.dataStore;
    }
    insert(item, after) {
        let insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, item);
            this.listSize++;
            return true;
        } else {
            return false;
        }
    }
    append(item) {
        this.dataStore[this.listSize] = item;
        this.listSize++;
    }
    remove(item) {
        let foundAt = this.find(item);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        } else {
            return false;
        }
    }
    front() {
        this.pos = 0;
    }
    end() {
        this.pos = this.listSize - 1;
    }
    prev() {
        if (this.pos > 0) {
            --this.pos;
        }
    }
    next() {
        if (this.pos < this.listSize) {
            this.pos++;
        }
    }
    length() {
        return this.dataStore.length;
    }
    curPos() { 
        return this.pos;
    }
    moveTo(position) {
        this.pos = position;
    }
    getElement() {
        return this.dataStore[this.pos];
    }
    contains(item) {
        return this.dataStore.indexOf(item) > -1;
    }
}


export class Stack {
    constructor() {
        this.dataStore = [];
        this.top = 0;

    }

    push(item) {
        this.dataStore[this.top++] = item;
    }
    pop(){
        return this.dataStore[--this.top];
    }
    peek(){
        return this.dataStore[this.top-1];
    }
    length(){
        return this.top;
    }
    clear(){
        this.top = 0;
    }
}




// module.exports = List; 