import {SVG_NS} from '../settings';

export default class Ball {

  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;
    this.reset();
  
  }
    
  reset() {
  this.x = this.boardWidth / 2;
  this.y = this.boardHeight / 2;

  this.vy = 0;
  while (this.vy === 0){
      this.vy = Math.floor(Math.random()* 10 -5);
  }


  this.vx = this.direction * (6 - Math.abs(this.vy));
}


  render(svg){
      this.x += this.vx;
      this.y += this.vy;

      let Ball= document.createElementNS(SVG_NS, 'circle');
      Ball.setAttributeNS(null, 'cx', this.boardWidth/2);
      Ball.setAttributeNS(null, 'cy', this.boardHeight/2);
      Ball.setAttributeNS(null,'r', 8);
      Ball.setAttributeNS(null, 'fill','white');
      svg.appendChild(Ball);
  }
}