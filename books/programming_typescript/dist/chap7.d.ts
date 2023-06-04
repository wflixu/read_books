declare function isValid(date: Date): boolean;
interface Option<T> {
    flatMap<U>(f: (value: T) => None): None;
    flatMap<U>(f: (value: T) => Option<U>): Option<U>;
    getOrElse(value: T): T;
}
declare class Some<T> implements Option<T> {
    private value;
    constructor(value: T);
    flatMap<U>(f: (value: T) => None): None;
    flatMap<U>(f: (value: T) => Some<U>): Some<U>;
    getOrElse(): T;
}
declare class None implements Option<never> {
    flatMap(): None;
    getOrElse<U>(value: U): U;
}
declare function GetOption<T>(value: null | undefined): None;
declare function GetOption<T>(value: T): Some<T>;
declare let result: Some<number>;
declare function ask(): Option<string>;
declare function parse(birthday: string): Option<Date>;
