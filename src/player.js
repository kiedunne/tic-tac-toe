function Player () {
  this.grid = [['', '', ''], ['', '', ''], ['', '', '']]
  this.turn = 'X'
  this.symbols = ['X', 'O']
};

Player.prototype.move = function (row, column) {
  if (this.grid[row][column] !== '') {
    console.log(this.grid[row][column])
    throw new Error('Spot taken!')
  } else if ((Number.isInteger(row) === false) || (Number.isInteger(column)) === false) {
    throw new Error('Row and column must be be a number!')
  } else {
    this.grid[row][column] = this.turn
  };
  console.log(this.grid)
}
