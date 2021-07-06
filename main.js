const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

class Puzzle {
  constructor(ctx) {
    this.ctx = ctx;
    this.widthInCells = 9;
    this.heightInCells = 9;
  }
}

const board = new Puzzle();

console.log(board.widthInCells);
