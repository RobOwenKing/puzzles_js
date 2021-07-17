/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/***/ (() => {

eval("const cvs = document.getElementById('canvas');\nconst ctx = canvas.getContext('2d');\n\nconst CELL_SIZE = 48;\n\nclass Puzzle {\n  constructor(context) {\n    this.canvas = canvas;\n    this.context = context;\n    this.widthInCells = 9;\n    this.heightInCells = 9;\n  }\n\n  draw() {\n    canvas.width = CELL_SIZE * this.widthInCells;\n    canvas.height = CELL_SIZE * this.heightInCells;\n  }\n}\n\nconst board = new Puzzle(ctx);\nboard.draw();\n\nconsole.log(\"Hello from main.js.\");\n\n\n//# sourceURL=webpack://puzzles_js/./app/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app/main.js"]();
/******/ 	
/******/ })()
;