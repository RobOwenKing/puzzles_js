const cvs = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const CELL_SIZE = 48;

class Puzzle {
  constructor(context) {
    this.canvas = canvas;
    this.context = context;
    this.widthInCells = 9;
    this.heightInCells = 9;
  }

  draw() {
    canvas.width = CELL_SIZE * this.widthInCells;
    canvas.height = CELL_SIZE * this.heightInCells;
  }
}

const board = new Puzzle(ctx);
board.draw();

console.log("Hello from main.js.");
