export class Sudoku {
  constructor(_givens, _cells, _cols) {
    this.givens = _givens;
    this.cells  = _cells;
    this.cols   = _cols;
  }

  draw(container) {
    Object.entries(this.givens).forEach(([index, value]) => {
      const cell = this.cells[index];
      const x = (cell.i + 0.5) * 100;
      // 0.54 below is a magic number, but looks better to me than 0.5
      const y = (cell.j + 0.54) * 100;

      container.constraints.insertAdjacentHTML('beforeend',
        `<text class="given" x="${x}" y="${y}">${value}</text>`);
    })
  }
}
