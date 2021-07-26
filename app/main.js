import { Puzzle } from '../src/puzzle.js';

const init = () => {
  const svg = document.getElementById('grid');
  const puzzle = new Puzzle(svg, 9, 9);
  puzzle.draw();
  console.log(puzzle);
}

init();
