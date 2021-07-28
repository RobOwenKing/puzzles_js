export class Cell {
  constructor(_i, _j, _index) {
    this.index = _index;
    this.i     = _i;
    this.j     = _j;
  }


  draw(container) {
    const x = this.i * 100;
    const y = this.j * 100;
    container.insertAdjacentHTML('beforeend',
        `<rect class="cell" data-index="${this.index}"
               x="${x}" y="${y}"
               width="101" height="101" />`);
  }
};
