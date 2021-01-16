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


