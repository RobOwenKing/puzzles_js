import { Cell } from './cell.js';

import { CONSTRAINT_CLASSES } from './constraints/constraint_classes.js';

export class Puzzle {
  constructor(_svg, _rows, _cols, _constraints) {
    // _svg is an object needing keys: svg, cells, cages, selecteds
    // All values DOM elements
    this.svg = _svg;

    this.rows = _rows;
    this.cols = _cols;

    this.cells = this.initCellInstances();

    this.selected = [];
    this.selectMode = 'single';

    // _constraints is an array of two-cell arrays
    // Each element first has a string representing the constraint class
    // Second any data needed to initialise the instance of that class
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
    // viewBox dimensions flexible to keep cell dimensions constant as grid size varies
    this.svg.svg.setAttribute('viewBox', `-16 -16 ${gridWidth + 32} ${gridHeight + 32}`);

    /*this.svg.insertAdjacentHTML('beforeend',
        `<rect x="0" y="0" width="${gridWidth}" height="${gridHeight}" stroke="black" stroke-width="5" fill="transparent" />`);*/

    this.cells.forEach((cell) => { cell.draw(this.svg.cells) });
    this.constraints.forEach((constraint) => { constraint.draw(this.svg) });
  }

  deselectAll() {
    this.selected = [];
    this.svg.selecteds.innerHTML = '';
  }

  selectHandler(event) {
    console.log(event);

    const index = parseInt(event.target.dataset.index);
    const cell = this.cells[index];

    if (this.selectMode === 'single') { this.deselectAll() }
    this.selected.push(index);
    this.svg.selecteds.insertAdjacentHTML('beforeend',
        `<rect class="selected" data-index="${index}"
               x="${cell.i * 100}" y="${cell.j * 100}"
               width="101" height="101" />`);
  }

  /*
    @todo Create separate UI class
  */
  activateCells() {
    const cells = document.querySelectorAll('.cell');
    const body  = document.querySelector('body');

    // The event listeners are passed arrow functions to avoid issues with 'this'
    cells.forEach(cell => {
      cell.addEventListener('mousedown', (event) => {
        this.selectHandler(event);
        this.selectMode = 'multiple';
      })
      cell.addEventListener('mouseover', (event) => {
        if (this.selectMode === 'multiple') { this.selectHandler(event); }
      })
    })

    body.addEventListener('mouseup', (event) => { this.selectMode = 'single'; })
  }
}

