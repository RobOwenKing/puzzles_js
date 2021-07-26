export class Puzzle {
  constructor(_svg, _rows, _cols) {
    this.svg  = _svg;

    this.rows = _rows;
    this.cols = _cols;
  }

  draw() {
    const gridWidth  = (this.cols * 100);
    const gridHeight = (this.rows * 100);
    this.svg.setAttribute('viewBox', `-16 -16 ${gridWidth + 32} ${gridHeight + 32}`);

    this.svg.insertAdjacentHTML('beforeend',
        `<rect x="0" y="0" width="${gridWidth}" height="${gridHeight}" stroke="black" stroke-width="5" fill="transparent" />`);
  }
}

