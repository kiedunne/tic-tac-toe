function Player () {
  this.grid = ['', '', '', '', '', '', '', '', '']
  this.turn = 'X'
  this.symbols = ['X','O']
  this.newTurn = ''
};

Player.prototype.move = function (position) {
  if (this.grid[position] != '') {
    throw new Error('Spot taken!')
  } else if (Number.isInteger(position) === false) {
    throw new Error('Must be a number.')
  } else {
    this.grid[position] = this.turn
  }
  console.log(this.grid)
}

Player.prototype.switchTurn = function() {
  this.newTurn = this.symbols.filter((x) => { return x != this.turn; })
  this.newTurn = this.newTurn[0]
};



// function oppositeSymbol(symbol) {
//   return symbol != 'X'
// };
//
// for (var symbol in this.symbols) {
//     if (symbol == this.turn) {
//       this.turn = symbol
//     }
// }
