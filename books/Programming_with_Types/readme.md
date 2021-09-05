## chap2

### never

### void

## chap3

习题
3.4.3

1. c 2. b 3. c 4 b

乘积 类型是将多个类型的纸

## chap4

基本类型偏执



习题

4.1.3
1 c 2

4.2.3

1.

```TS
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
```


