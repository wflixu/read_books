declare const celsiusType: unique symbol;

class Celsius {
    readonly value: number;
    [celsiusType]: void;
    constructor(value: number) {
        if (value < -273.15) {
            value = -273.15
        }
        this.value = value;
    }
}


declare const percentType: unique symbol;

class PercentTage {
    readonly value: number;

    [percentType]: void;
    constructor(value: number) {
        if (value <0) {
            value = 0
        }
        if(value>100){
            value =100;
        }
        this.value = value;
    }
}

