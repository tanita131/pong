import {SVG_NS} from '../settings';
export default class Score {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }


    render(svg, scoreCount) {
        let score = document.createElementNS(SVG_NS, 'text');
        score.setAttributeNS(null, 'x', this.x);
        score.setAttributeNS(null, 'y', this.y);
        score.setAttributeNS(null, 'fill', 'yellow');
        score.setAttributeNS(null, 'font-family', 'Silkscreen Web');
        score.setAttributeNS(null, 'font-size', '40');
        score.setAttributeNS(null, 'kerning', '10');
        score.innerHTML = scoreCount;
        svg.appendChild(score);
    }

}