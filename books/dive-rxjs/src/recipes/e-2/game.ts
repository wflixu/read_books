import { fromEvent, pipe, noop, Subject, BehaviorSubject, merge } from 'rxjs';
import { repeatWhen, delay, filter, map, takeWhile, tap } from 'rxjs/operators';
import {
  GAME_SIZE,
  EMPTY,
  MISS,
  HIT,
  SHORTEST_SHIP,
  LONGEST_SHIP,
  PLAYER,
  COMPUTER,
  NUMBER_OF_SHIP_PARTS
} from './constants';
import { paintBoards, paintScores } from './html-renderer';
import { Boards, ComputerMove } from './interfaces';

export const random = () => Math.floor(Math.random() * Math.floor(GAME_SIZE));

export const validClicks$ = pipe(
  map((e: MouseEvent) => e.target['id']),
  filter(e => e)
);

const playerMove = new Subject();
const computerMove = new BehaviorSubject({ playerBoard: [], hits: {} });

const shot = (
  boards: Boards,
  player: string,
  x: number,
  y: number
): [number, number, boolean, number] =>
  ((boardValue): [number, number, boolean, number] => (
    (boards[player][x][y] = boardValue === EMPTY ? MISS : HIT),
    [x, y, boards[player][x][y] === HIT, boardValue]
  ))(boards[player][x][y]);

const isValidMove = (boards: Boards, player, x, y): boolean =>
  boards[player][x][y] !== HIT && boards[player][x][y] !== MISS;

const performShot$ = (
  boards: Boards,
  player: string,
  nextMove: (x, y, wasHit, boardValue) => void
) =>
  pipe(
    tap(([player, x, y]) =>
      !isValidMove(boards, player, x, y)
        ? nextMove(x, y, true, boards[player][x][y])
        : noop
    ),
    filter(([player, x, y]) => isValidMove(boards, player, x, y)),
    map(([_, x, y]) => shot(boards, player, x, y)),
    tap(
      ([x, y, wasHit, boardValue]) => (
        paintBoards(boards),
        nextMove(x, y, wasHit, boardValue),
        paintScores(computerScore$, playerScore$)
      )
    )
  );

const computerHits = (
  playerBoard: number[][],
  x: number,
  y: number,
  wasHit: boolean,
  boardValue: number
): ComputerMove => {
  if ([EMPTY, HIT, MISS].some(e => e === boardValue)) {
    return computerMove.value;
  }
  if (!computerMove.value.hits[boardValue]) {
    computerMove.value.hits[boardValue] = [];
  }
  computerMove.value.hits[boardValue].push({ x, y });
  computerMove.value.playerBoard = playerBoard;

  return computerMove.value;
};

const nextComputerMove = (): [string, number, number] => {
  const hits = computerMove.value.hits;
  const shipToPursue = Object.keys(hits).find(
    e => hits[e].length !== parseInt(e)
  );
  if (!shipToPursue) {
    return [PLAYER, random(), random()];
  }

  const playerBoard = computerMove.value.playerBoard;
  const shipHits = hits[shipToPursue];
  if (shipHits.length === 1) {
    const hit = shipHits[0];

    const shotCandidates = [
      [hit.x, hit.y - 1],
      [hit.x, hit.y + 1],
      [hit.x - 1, hit.y],
      [hit.x + 1, hit.y]
    ].filter(
      ([x, y]) =>
        playerBoard[x] &&
        playerBoard[x][y] !== undefined &&
        playerBoard[x][y] !== MISS &&
        playerBoard[x][y] !== HIT
    );

    return [PLAYER, shotCandidates[0][0], shotCandidates[0][1]];
  }

  const getOrderedHits = key =>
    (orderedHits => [orderedHits[0], orderedHits[orderedHits.length - 1]])(
      shipHits.sort((h1, h2) => (h1[key] > h2[key] ? 1 : -1))
    );
  const isHorizontal = shipHits.every(e => e.x === shipHits[0].x);

  if (isHorizontal) {
    const [min, max] = getOrderedHits('y');
    return [
      PLAYER,
      min.x,
      playerBoard[min.x][min.y - 1] !== undefined &&
      playerBoard[min.x][min.y - 1] !== HIT &&
      playerBoard[min.x][min.y - 1] !== MISS
        ? min.y - 1
        : max.y + 1
    ];
  }

  const [min, max] = getOrderedHits('x');
  return [
    PLAYER,
    playerBoard[min.x - 1] !== undefined &&
    playerBoard[min.x - 1][min.y] !== HIT &&
    playerBoard[min.x - 1][min.y] !== MISS
      ? min.x - 1
      : max.x + 1,
    min.y
  ];
};

const initialScore = () => ({
  score: 0,
  ships: { 5: 5, 4: 4, 3: 3, 2: 2, 1: 1 }
});
export const playerScore$ = new BehaviorSubject(initialScore());
export const computerScore$ = new BehaviorSubject(initialScore());
export const isNotGameOver = _ =>
  computerScore$.value.score < NUMBER_OF_SHIP_PARTS &&
  playerScore$.value.score < NUMBER_OF_SHIP_PARTS;

const scoreChange = (subject: BehaviorSubject<any>, boardValue: number) =>
  boardValue >= SHORTEST_SHIP && boardValue <= LONGEST_SHIP
    ? ((subject.value.ships[boardValue] -= 1),
      subject.next({
        score: subject.value.score + 1,
        ships: subject.value.ships
      }))
    : noop;

const computerShot$ = (boards: Boards) =>
  computerMove.pipe(
    delay(200),
    map(_ => nextComputerMove()),
    performShot$(boards, PLAYER, (x, y, wasHit, boardValue) =>
      wasHit
        ? (scoreChange(computerScore$, boardValue),
          computerMove.next(
            computerHits(boards[PLAYER], x, y, wasHit, boardValue)
          ))
        : playerMove.next()
    )
  );

const playerShot$ = (boards: Boards) =>
  fromEvent(document, 'click').pipe(
    validClicks$,
    map((click: string) => click.split(',')),
    filter(([player]) => player === COMPUTER),
    performShot$(boards, COMPUTER, (x, y, wasHit, boardValue) =>
      wasHit
        ? scoreChange(playerScore$, boardValue)
        : computerMove.next(computerMove.value)
    ),
    takeWhile(([x, y, wasHit]) => wasHit),
    repeatWhen(_ => playerMove)
  );

export const shots$ = (boards: Boards) =>
  merge(playerShot$(boards), computerShot$(boards));