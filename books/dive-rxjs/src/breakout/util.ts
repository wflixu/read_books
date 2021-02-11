import {
  BALL_RADIUS,
  BRICK_COLUMNS,
  BRICK_GAP,
  BRICK_HEIGHT,
  BRICK_ROWS,
  PADDLE_HEIGHT,
  PADDLE_WIDTH,
} from '.';
import { Brick, IBall } from './types';

export function createStage(): HTMLCanvasElement {
  let stage = document.createElement('canvas');
  stage.width = 480;
  stage.height = 600;
  document.body.appendChild(stage);
  return stage;
}

export function drawIntro(
  ctx: CanvasRenderingContext2D,
  stage: HTMLCanvasElement
) {
  ctx.clearRect(0, 0, stage.width, stage.height);
  ctx.textAlign = 'center';
  ctx.font = '24px Courier New';
  ctx.fillText('Press [<] and [>]', stage.width / 2, stage.height / 2);
}

export function isCollision(brick: Brick, ball: IBall) {
  return (
    ball.position.x + ball.direction.x > brick.x - brick.width / 2 &&
    ball.position.x + ball.direction.x < brick.x + brick.width / 2 &&
    ball.position.y + ball.direction.y > brick.y - brick.height / 2 &&
    ball.position.y + ball.direction.y < brick.y + brick.height / 2
  );
}

export function updateView(paddle, state, restart, ctx, stage) {
  ctx.clearRect(0, 0, stage.width, stage.height);
  drawBorder(ctx, stage);
  drawPaddle(paddle, ctx);
  drawBall(state.ball, ctx);
  drawBricks(state.bricks, ctx);
  drawScore(state.score, ctx);

  if (state.ball.position.y > stage.height - BALL_RADIUS) {
    drawGameOver('GAME OVER', ctx, stage);
    restart.error('game over');
  }

  if (state.bricks.length === 0) {
    drawGameOver('Congradulations!', ctx, stage);
    restart.error('cong');
  }
}

export function drawBricks(
  bricks: Array<Brick>,
  context: CanvasRenderingContext2D
) {
  bricks.forEach((brick) => drawBrick(brick, context));
}

export function drawBrick(brick: Brick, context: CanvasRenderingContext2D) {
  context.beginPath();
  context.rect(
    brick.x - brick.width / 2,
    brick.y - brick.height / 2,
    brick.width,
    brick.height
  );
  context.fill();
  context.closePath();
}

export function drawBall(ball, context: CanvasRenderingContext2D) {
  context.beginPath();
  context.arc(ball.position.x, ball.position.y, BALL_RADIUS, 0, Math.PI * 2);
  context.fill();
  context.closePath();
}

export function drawPaddle(position, context: CanvasRenderingContext2D) {
  context.beginPath();
  context.rect(
    position - PADDLE_WIDTH / 2,
    context.canvas.height - PADDLE_HEIGHT,
    PADDLE_WIDTH,
    PADDLE_HEIGHT
  );
  context.fill();
  context.closePath();
}

export function drawScore(score: number, ctx: CanvasRenderingContext2D) {
  ctx.textAlign = 'left';
  ctx.font = '16px Courier New';
  ctx.fillText(score + '', BRICK_GAP, 16);
}

export function drawGameOver(
  text: string,
  ctx: CanvasRenderingContext2D,
  stage: HTMLCanvasElement
) {
  ctx.clearRect(
    stage.width / 4,
    stage.height / 3,
    stage.width / 2,
    stage.height / 3
  );
  ctx.textAlign = 'center';
  ctx.font = '24px Courier New';
  ctx.fillText(text, stage.width / 2, stage.height / 2);
}

export function isHit(paddle, ball: IBall, stage: HTMLCanvasElement) {
  return (
    ball.position.x > paddle - PADDLE_WIDTH / 2 &&
    ball.position.x < paddle + PADDLE_WIDTH / 2 &&
    ball.position.y > stage.height - PADDLE_HEIGHT - BALL_RADIUS / 2
  );
}

export function createBricks(stage: HTMLCanvasElement): Array<Brick> {
  let width =
    (stage.width - BRICK_GAP - BRICK_GAP * BRICK_COLUMNS) / BRICK_COLUMNS;
  let bricks = [];

  for (let i = 0; i < BRICK_ROWS; i++) {
    for (let j = 0; j < BRICK_COLUMNS; j++) {
      bricks.push({
        x: j * (width + BRICK_GAP) + width / 2 + BRICK_GAP,
        y: i * (BRICK_HEIGHT + BRICK_GAP) + BRICK_HEIGHT / 2 + BRICK_GAP + 20,
        width: width,
        height: BRICK_HEIGHT,
      });
    }
  }

  return bricks;
}

function drawBorder(
  context: CanvasRenderingContext2D,
  stage: HTMLCanvasElement
) {
  context.lineWidth = 3;
  context.strokeRect(0, 0, stage.width, stage.height);
}
