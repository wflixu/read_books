// class ColorPoint extends Point {
//     constructor(x, y, color) {
//         super(x, y);
//         this.color = color;
//     }
//     toString() {
//         return this.color + '' + super.toString();
//     }
// }
// class Point {

// }

class Rectangle {
    constructor(length, width) {
        console.log(new.target === Rectangle);
    }
}

class Square extends Rectangle {
    constructor(length) {
        super(length, length);
    }
}
var obj = new Square(3);