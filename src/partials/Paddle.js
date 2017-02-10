import{SVG_NS} from '../settings';

export default class Paddle {

  constructor(boardHeight, width, height, x, y) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;
  }
  render(svg){
      	 let Paddle = document.createElementNS(SVG_NS, 'rect');
         Paddle.setAttributeNS(null, 'x', this.x);
         Paddle.setAttributeNS(null, 'y', this.y);
		 Paddle.setAttributeNS(null,'width', this.width);
		 Paddle.setAttributeNS(null,'height', this.height);
         Paddle.setAttributeNS(null, 'fill','white');
         svg.appendChild(Paddle);
      
  }
}