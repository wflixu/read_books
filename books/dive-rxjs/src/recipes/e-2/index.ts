// RxJS v6+
import { concat, merge } from 'rxjs';
import { switchMap, takeWhile, finalize } from 'rxjs/operators';
import { NUMBER_OF_SHIP_PARTS } from './constants';
import { displayGameOver, paintBoards$ } from './html-renderer';
import { shots$, computerScore$, playerScore$, isNotGameOver } from './game';
import { setup$, emptyBoards$ } from './setup';
import { Boards } from './interfaces';

const game$ = emptyBoards$.pipe(
  paintBoards$,
  switchMap((boards: Boards) =>
    concat(setup$(boards), shots$(boards)).pipe(
      takeWhile(isNotGameOver),
      finalize(displayGameOver(computerScore$))
    )
  )
);
window.onload = function(){
  merge(game$, computerScore$, playerScore$).subscribe();
}