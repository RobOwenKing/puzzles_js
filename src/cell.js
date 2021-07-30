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

  drawEntry(container) {
    const x = (this.i + 0.5) * 100;
    // 0.54 below is a magic number, but looks better to me than 0.5
    const y = (this.j + 0.54) * 100;

    container.insertAdjacentHTML('beforeend',
      `<text class="given" x="${x}" y="${y}">${this.entry}</text>`);
  }

  handleEntry(value, container) {
    this.entry = value;
    this.drawEntry(container.constraints);
  }
};
