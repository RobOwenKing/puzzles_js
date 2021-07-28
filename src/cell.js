export class Cell {
  constructor(_i, _j, _index) {
    this.index = _index; // The instance's index in the array of all cells
    this.i     = _i;
    this.j     = _j;
  }

  /*
    @param container - A DOM element the cell's svg code will be inserted into
  */
  draw(container) {
    const x = this.i * 100;
    const y = this.j * 100;
    container.insertAdjacentHTML('beforeend',
        `<rect class="cell" data-index="${this.index}"
               x="${x}" y="${y}"
               width="100" height="100" />`);
  }
};
