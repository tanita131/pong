import {SVG_NS} from '../settings';
export default class Paddle {

  constructor(boardHeight, width, height, x, y, up, down) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;

    document.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case up:
          this.up();
          break;
        case down:
          this.down();
          break;
      }
    });

  }

  up() {
    this.y = Math.max(0, this.y - this.speed);
  }
  down() {
    this.y = Math.min(this.boardHeight - this.height, this.y + this.speed);
  }

  coordinates(x, y, width, height) {
    let leftX = x;
    let rightX = x + width;
    let topY = y;
    let bottomY = y + height;
    return [leftX, rightX, topY, bottomY];
  }

  render(svg) {
    let Paddle = document.createElementNS(SVG_NS, 'rect');
    Paddle.setAttributeNS(null, 'x', this.x);
    Paddle.setAttributeNS(null, 'y', this.y);
    Paddle.setAttributeNS(null, 'width', this.width);
    Paddle.setAttributeNS(null, 'height', this.height);
    Paddle.setAttributeNS(null, 'fill', 'purple');
    svg.appendChild(Paddle);

  }
}