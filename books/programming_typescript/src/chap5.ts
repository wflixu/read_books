class Game {

}

class Piece {

}

class Position {

}

interface A {
    good(x: string): string,
    bad(x: number): string,
}

// interface B extends A {
//     good(x: string | number): string
//     bad(x: string): string
// }


type B = A & {
    good(x: string | number): string
    bad(x: string): string
}


