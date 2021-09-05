
declare const EmptyType: unique symbol;

class Empty {
    [EmptyType]: void;
    private constructor() { }
}

function raise(message: string): Empty {
    console.error('aksjdkfj ')
    throw new Error(message);
    // return ;
}