declare type Filter<T> = {
    (array: T[], f: (item: T) => boolean): T[];
};
declare let numberFilter: Filter<number>;
declare type Row = Record<string, any>;
declare function map<T, U>(array: T[], f: (item: T) => U): U[];
declare type MyEvent<T> = {
    target: T;
    type: string;
};
declare type ButtonEvent = MyEvent<HTMLButtonElement>;
declare let myEvent: MyEvent<HTMLButtonElement | null>;
