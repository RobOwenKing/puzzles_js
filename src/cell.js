export class Cell {
  constructor(_i, _j, _index) {
    this.index = _index;
    this.i     = _i;
    this.j     = _j;
  }


  draw(svg) {
    const x = this.i * 100;
    const y = this.j * 100;
    svg.insertAdjacentHTML('beforeend',
        `<rect class="cell" data-index="${this.index}"
               x="${x}" y="${y}"
               width="101" height="101"
               stroke="black" stroke-width="1"
               fill="transparent" />`);
  }
};
