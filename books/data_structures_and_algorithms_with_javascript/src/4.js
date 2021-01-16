import { Stack } from './class.js';
export function mulBase(num, base) {
    let s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);

    } while (num > 0);
    let converted = '';
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}

export function isPalindrome(word) {
    let s = new Stack();
    for (let i = 0; i < word.length; i++) {
        s.push(word[i]);
    }
    let rword = '';
    while (s.length() > 0) {
        rword += s.pop();
    }

    return rword == word;
}

export function factorial(n){ 
    if(n===0){
        return 1;
    }else {
        return n*factorial(n-1);
    }
}

export function fact(n){ 
    let s = new Stack();
    while(n>1){
        s.push(n--);
    }
    let product = 1;
    while(s.length() > 0){
        product = product * s.pop();

    }
    return product;
}