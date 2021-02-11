export interface Brick {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface IBall {
  position: IPosition;
  direction: IDirection;
}

export interface IPosition {
  x: number;
  y: number;
}
export interface IDirection {
  x: number;
  y: number;
}
