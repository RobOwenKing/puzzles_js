export class Cages {
  constructor(_cages, _cells, _cols) {
    this.cages = _cages;
    this.cells = _cells;
    this.cols  = _cols;
  }

  drawCellCageBorders(cell, cage) {
    const x = this.cells[cell].i * 100;
    const y = this.cells[cell].j * 100;
    let d = "";

    if (!cage.includes(cell - this.cols)) { d += `M ${x} ${y} h 101 `; }
    if (!cage.includes(cell + 1))         { d += `M ${x + 100} ${y} v 101 `; }
    if (!cage.includes(cell + this.cols)) { d += `M ${x} ${y + 100} h 101 `; }
    if (!cage.includes(cell - 1))         { d += `M ${x} ${y} v 101 `; }

    return d;
  }

  drawCage(svg, cage, index) {
    let d = "";
    cage.forEach((cell) => {
      d += this.drawCellCageBorders(cell, cage);
    })
    svg.insertAdjacentHTML('beforeend',
        `<path id="cage-${index}" d="${d}"
               stroke="black" stroke-width="5" />`);
  }

  draw(svg) {
    this.cages.forEach((cage, index) => { this.drawCage(svg, cage, index) })
  }
}
