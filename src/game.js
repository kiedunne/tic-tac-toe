function Game() {
  this.gameStatus = '';
  this.grid = [['', '', ''], ['', '', ''], ['', '', '']];
  this.symbols = ['X', 'O'];
  this.turn = 'X';
}

Game.prototype.switchTurn = function () {
  this.turn = this.symbols.filter(x => x !== this.turn);
  this.turn = this.turn[0];
};

Game.prototype.checkStatus = function (grid) {
  if (grid.flat().includes('') === false) {
    this.gameStatus = 'Draw';
  } else if (grid.every(obj => obj[0] === obj[0]) || grid.every(obj => obj[1] === obj[1]) || grid.every(obj => obj[2] === obj[2])) {
    this.gameStatus = 'Vertical Winner!';
  }
};
