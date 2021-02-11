import { BehaviorSubject, pipe } from "rxjs";
import { tap } from "rxjs/operators";
import {
  NUMBER_OF_SHIP_PARTS,
  EMPTY,
  MISS,
  HIT,
  PLAYER,
  COMPUTER
} from "./constants";
import { Boards } from "./interfaces";

const byId = (id: string): HTMLElement => document.getElementById(id);
export const computerScoreContainer = byId("computer_score");
export const playerScoreContainer = byId("player_score");

const playerCells = (cell: number): string | number =>
  cell !== EMPTY ? (cell === MISS ? "o" : cell === HIT ? "x" : cell) : "_";
const computerCells = (cell: number): string | number =>
  cell === HIT || cell === MISS ? (cell === MISS ? "o" : "x") : "_";

export const paintBoard = (
  container: HTMLElement,
  playerName: string,
  board: number[][]
) => (
  (container.innerHTML = ""),
  board.forEach((r, i) =>
    r.forEach(
      (c, j) =>
        (container.innerHTML += `
    <div id=${playerName},${i},${j}
    style='float:left; margin-left: 5px'>
    ${playerName === PLAYER ? playerCells(c) : computerCells(c)}
    </div>`),
      (container.innerHTML += "<br/>")
    )
  ),
  (container.innerHTML += "<br/><br/>")
);

export const paintShipsInfo = (scoreSubject: BehaviorSubject<any>) =>
  Object.keys(scoreSubject.value.ships).reduce(
    (a, c) => ((a += `<b>${c} </b>: ${scoreSubject.value.ships[c]} | `), a),
    ""
  );

export const paintScores = (
  computerScore: BehaviorSubject<any>,
  playerScore: BehaviorSubject<any>
) =>
  ((c: HTMLElement, p: HTMLElement) => (
    (c.innerHTML = ""),
    (c.innerHTML += "Computer score: " + computerScore.value.score + "<br/>"),
    paintShipsInfo(computerScore),
    (c.innerHTML += "Ships: " + paintShipsInfo(computerScore)),
    (p.innerHTML = ""),
    (p.innerHTML += "Player score: " + playerScore.value.score + "<br/>"),
    (p.innerHTML += "Ships: " + paintShipsInfo(playerScore))
  ))(computerScoreContainer, playerScoreContainer);

export const paintBoards = (boards: Boards) => (
  paintBoard(byId("player_board"), PLAYER, boards[PLAYER]),
  paintBoard(byId("computer_board"), COMPUTER, boards[COMPUTER])
);

export const paintBoards$ = pipe<any, any>(tap(paintBoards));

export const displayGameOver = (computerScore: BehaviorSubject<any>) => () => {
  const gameOverText = `GAME OVER,
          ${
            computerScore.value.score === NUMBER_OF_SHIP_PARTS
              ? "Computer"
              : "Player"
          }
           won`;
  playerScoreContainer.innerHTML = gameOverText;
  computerScoreContainer.innerHTML = gameOverText;
};