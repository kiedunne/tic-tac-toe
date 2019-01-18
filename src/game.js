function Game () {
  this.grid = [['', '', ''], ['', '', ''], ['', '', '']]
  this.symbols = ['X', 'O']
  this.turn = 'X'
}

Game.prototype.switchTurn = function () {
  this.turn = this.symbols.filter((x) => { return x !== this.turn })
  this.turn = this.turn[0]
}
