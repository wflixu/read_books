class Point {
    readonly kind: string = 'Point';
    x: number = 0;
    y: number = 0;
}

class Circle {
    readonly kind: string = "circle";
    x: number = 0;
    y: number = 0;
    radius: number = 0;
}

class Rectangle {
    readonly kind: string = 'rectangle';
    x: number = 0;
    y: number = 0;
    width: number = 0;
    height: number = 0;
}

type Shape = Point | Circle | Rectangle;

