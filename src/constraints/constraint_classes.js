import { Cages }  from './cages.js';
import { Sudoku } from './sudoku.js';

/*
  Maps string for each constraint to class
  @used_in constructor() in ../puzzle.js
*/
export const CONSTRAINT_CLASSES = {
  'cages':  Cages,
  'sudoku': Sudoku
};
