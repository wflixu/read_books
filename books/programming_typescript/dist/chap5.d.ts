declare type Payload = Record<string, any>;
declare type ClassConstructor<T> = new (...args: any[]) => T;
declare function serializable<T extends ClassConstructor<{
    getValue(): Payload;
}>>(Constructor: T): {
    new (...args: any[]): {
        serizlize(): string;
        getValue(): Payload;
    };
} & T;
declare class APIPayload {
    getValue(): Payload;
}
declare class MessageQueue {
    private message;
    private constructor();
    static create(messge: string[]): MessageQueue;
}
declare type Shoe = {
    purpose: string;
};
declare class BalletFlet implements Shoe {
    purpose: string;
}
declare class Boot implements Shoe {
    purpose: string;
}
declare class Sneaker implements Shoe {
    purpose: string;
}
declare let Shoe: {
    create(type: 'BalletFlet' | 'Boot' | 'Sneaker'): Shoe;
};
declare class RequestBuilder {
    private data;
    private method;
    private url;
    setMethod(method: 'get' | 'post'): this;
    setData(data: object): this;
    setURL(url: string): this;
    send(): void;
}
