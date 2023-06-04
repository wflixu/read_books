declare let myVar: {
    test: {
        bar: string;
    };
};
declare let foo: string;
declare type ToArray<T> = T extends unknown[] ? T : T[];
declare module 'foo' {
    type MyType = number;
    type MyDefaultType = {
        a: string;
    };
}
declare type MyGlobal = number;
