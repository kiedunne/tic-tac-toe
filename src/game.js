
function Game(player1 = new Player('X'), player2 = new Player('O'), gameStatus = new Status()) {
  this.gameStatus = gameStatus
  this.grid = [['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_']]
  this.turn = player1
  this.player1 = player1
  this.player2 = player2
  this.players = [player1, player2]
}

Game.prototype.move = function (row, column) {
  if (this.grid[row][column] !== '_') {
    throw new Error('Spot taken!');
  } else if ((Number.isInteger(row) === false) || (Number.isInteger(column)) === false) {
    throw new Error('Row and column must be be a number!');
  } else {
    this._setTile(row, column);
    this._checkGameStatus();
    this._changeTurn();
  }
};

Game.prototype._setTile = function (row, column) {
  this.grid[row][column] = this.turn.symbol;
  console.log(this.grid);
};

Game.prototype._changeTurn = function () {
  this.turn = this.players.filter(x => x !== this.turn);
  this.turn = this.turn[0];
};

Game.prototype._checkGameStatus = function () {
  this.gameStatus.check(this.grid)
  console.log(this.gameStatus.msg)
  if (this.gameStatus.msg === 'Diagonal Winner!' || this.gameStatus.msg === 'Horizontal Winner!' || this.gameStatus.msg === 'Vertical Winner!') {
    this._wipeBoard();
  }
};

Game.prototype._wipeBoard = function () {
  this.grid = [['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_']]
};
