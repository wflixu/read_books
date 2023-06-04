declare let myVar : {
    test:{
        bar:string
    }
}

declare let foo:string;



type ToArray<T> = T extends unknown[]? T:T[]


declare module 'foo' {
    export type MyType = number;
    export type MyDefaultType = {a: string}
}

type MyGlobal = number;