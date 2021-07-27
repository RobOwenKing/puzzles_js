import { Cell } from './cell.js';

import { CONSTRAINT_CLASSES } from './constraints/constraint_classes.js';

export class Puzzle {
  constructor(_svg, _rows, _cols, _constraints) {
    this.svg = _svg;

    this.rows = _rows;
    this.cols = _cols;

    this.constraints = _constraints.map(([type, data]) => {
          return new CONSTRAINT_CLASSES[type](data);
        });

    this.cells = [];
  }

  initCells() {
    let index = 0;
    for (let i = 0; i < this.cols; i += 1) {
      for (let j = 0; j < this.rows; j += 1) {
        this.cells.push(new Cell(i, j, index));
        index += 1;
      }
    }
  }

  draw() {
    const gridWidth  = (this.cols * 100);
    const gridHeight = (this.rows * 100);
    this.svg.setAttribute('viewBox', `-16 -16 ${gridWidth + 32} ${gridHeight + 32}`);

    this.svg.insertAdjacentHTML('beforeend',
        `<rect x="0" y="0" width="${gridWidth}" height="${gridHeight}" stroke="black" stroke-width="5" fill="transparent" />`);

    this.cells.forEach((cell) => {cell.draw(this.svg)});
  }
}

