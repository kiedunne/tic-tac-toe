function Game () {
  this.gameStatus = ''
  this.grid = [['', '', ''], ['', '', ''], ['', '', '']]
  this.symbols = ['X', 'O']
  this.turn = 'X'
  this.player1 = new Player()
  this.plater2 = new Player()
};

Game.prototype.switchTurn = function () {
  this.turn = this.symbols.filter((x) => { return x !== this.turn })
  this.turn = this.turn[0]
};

Game.prototype.checkLose = function () {
  if (this.grid.includes('') == false) {
    this.gameStatus = 'Draw'
  };
};
