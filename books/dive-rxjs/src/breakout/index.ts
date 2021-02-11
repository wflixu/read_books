import {
  animationFrameScheduler,
  fromEvent,
  interval,
  merge,
  Observable,
  pipe,
  Subject,
} from 'rxjs';
import {
  delay,
  distinctUntilChanged,
  map,
  mapTo,
  retryWhen,
  scan,
  tap,
  withLatestFrom,
} from 'rxjs/operators';
import {
  createBricks,
  createStage,
  drawIntro,
  isCollision,
  isHit,
  updateView,
} from './util';

const stage = createStage();
const ctx: CanvasRenderingContext2D = stage.getContext('2d');

ctx.fillStyle = 'green';
ctx.strokeStyle = 'red';

export const PADDLE_WIDTH = 100;
export const PADDLE_HEIGHT = 20;

export const BALL_RADIUS = 10;

export const BRICK_ROWS = 5;
export const BRICK_COLUMNS = 7;
export const BRICK_HEIGHT = 20;
export const BRICK_GAP = 3;

const TICKER_INTERVAL = Math.ceil(1000 / 60);
const PADDLE_CONTROLS = {
  ArrowLeft: -1,
  ArrowRight: 1,
};

const PADDLE_SPEED = 240;

const ticker$ = interval(TICKER_INTERVAL, animationFrameScheduler).pipe(
  map(() => ({
    time: Date.now(),
    deltaTime: null,
  })),
  scan((previous, current) => ({
    time: current.time,
    deltaTime: (current.time - previous.time) / 1000,
  }))
);

const key$ = merge(
  fromEvent(document, 'keydown').pipe(
    map((event: KeyboardEvent) => PADDLE_CONTROLS[event.key] || 0)
  ),
  fromEvent(document, 'keyup').pipe(mapTo(0))
).pipe(distinctUntilChanged());

const createPaddle$ = (ticker$) => {
  return ticker$.pipe(
    withLatestFrom(key$),
    scan((position, [ticker, direction]) => {
      const nextPosition =
        position + direction * ticker.deltaTime * PADDLE_SPEED;
      return Math.max(
        Math.min(nextPosition, stage.width - PADDLE_WIDTH / 2),
        PADDLE_WIDTH / 2
      );
    }, stage.width / 2),
    distinctUntilChanged()
  );
};

const initState = () => ({
  ball: {
    position: {
      x: stage.width / 2,
      y: stage.height / 2,
    },
    direction: {
      x: 2,
      y: 2,
    },
  },
  bricks: createBricks(stage),
  score: 0,
});

const BALL_SPEED = 60;

const createState$ = (ticker$, paddle$) =>
  ticker$.pipe(
    withLatestFrom(paddle$),
    scan(({ ball, bricks, score }, [ticker, paddle]) => {
      let remainingBricks = [];
      const collisions = {
        paddle: false,
        floor: false,
        wall: false,
        ceiling: false,
        brick: false,
      };

      ball.position.x =
        ball.position.x + ball.direction.x * ticker.deltaTime * BALL_SPEED;
      ball.position.y =
        ball.position.y + ball.direction.y * ticker.deltaTime * BALL_SPEED;

      bricks.forEach((brick) => {
        if (!isCollision(brick, ball)) {
          remainingBricks.push(brick);
        } else {
          collisions.brick = true;
          score = score + 10;
        }
      });

      collisions.paddle = isHit(paddle, ball, stage);

      if (
        ball.position.x < BALL_RADIUS ||
        ball.position.x > stage.width - BALL_RADIUS
      ) {
        ball.direction.x = -ball.direction.x;
        collisions.wall = true;
      }

      collisions.ceiling = ball.position.y < BALL_RADIUS;

      if (collisions.brick || collisions.paddle || collisions.ceiling) {
        ball.direction.y = -ball.direction.y;
      }

      return {
        ball: ball,
        bricks: remainingBricks,
        collisions: collisions,
        score: score,
      };
    }, initState())
  );

let restart: Subject<any> ;

const game$ = new Observable((observer) => {
  drawIntro(ctx, stage);
  restart = new Subject();
  const paddle$ = createPaddle$(ticker$);
  const state$ = createState$(ticker$, paddle$);

  merge(ticker$.pipe(withLatestFrom(paddle$, state$)), restart).subscribe(
    observer
  );
});
game$
  .pipe(
    retryWhen((err$) => {
      return err$.pipe(delay(2000));
    })
  )
  .subscribe(([ticker, paddle, state]) => {
    updateView(paddle, state, restart, ctx, stage);
  });
//   .subscribe(
//       updateView);
