import { Cell } from './cell.js';

import { CONSTRAINT_CLASSES } from './constraints/constraint_classes.js';

export class Puzzle {
  constructor(_svg, _rows, _cols, _constraints) {
    this.svg = _svg;

    this.rows = _rows;
    this.cols = _cols;

    this.cells = this.initCellInstances();
    this.selected = [];
    this.selectMode = 'single';

    this.constraints = _constraints.map(([type, data]) => {
          return new CONSTRAINT_CLASSES[type](data, this.cells, this.cols);
        });
  }

  initCellInstances() {
    const cells = [];
    let index = 0;
    for (let j = 0; j < this.rows; j += 1) {
      for (let i = 0; i < this.cols; i += 1) {
        cells.push(new Cell(i, j, index));
        index += 1;
      }
    }
    return cells;
  }

  draw() {
    const gridWidth  = (this.cols * 100);
    const gridHeight = (this.rows * 100);
    this.svg.svg.setAttribute('viewBox', `-16 -16 ${gridWidth + 32} ${gridHeight + 32}`);

    /*this.svg.insertAdjacentHTML('beforeend',
        `<rect x="0" y="0" width="${gridWidth}" height="${gridHeight}" stroke="black" stroke-width="5" fill="transparent" />`);
*/
    this.cells.forEach((cell) => { cell.draw(this.svg.cells) });
    this.constraints.forEach((constraint) => { constraint.draw(this.svg.cages) });
  }

  deselectAll() {
    this.selected = [];
  }

  selectHandler(event) {
    console.log(event);

    const index = parseInt(event.target.dataset.index);

    if (this.selectMode === 'single') { this.deselectAll() }
    this.selected.push(index);
    console.log(this.selected);
  }

  activateCells() {
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
      cell.addEventListener('click', (event) => { this.selectHandler(event) })
    })
  }
}

