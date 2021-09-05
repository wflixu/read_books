declare const UnitType: unique symbol;

class Unit {
    [UnitType]: void;
    static readonly value: Unit = new Unit();
    private constructor() { };
}

function greet(): Unit {
    console.log('hello world!');
    return Unit.value;
}