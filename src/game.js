import { Player } from './player';
import { Status } from './status';

function Game(player1 = new Player('X'), player2 = new Player('O'), gameStatus = new Status()) {
  this.gameStatus = gameStatus;
  this.grid = [['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_']];
  this.turn = player1;
  this.players = [player1, player2];
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
};

Game.prototype._checkGameStatus = function () {
  this.gameStatus.check(this.grid);
  if (this.gameStatus.msg === 'Diagonal Winner!' || this.gameStatus.msg === 'Horizontal Winner!' || this.gameStatus.msg === 'Vertical Winner!') {
    this._addPoint();
    this._wipeBoard();
  }
};

Game.prototype._changeTurn = function () {
  this.turn = this.players.filter(x => x !== this.turn);
  this.turn = this.turn[0];
};

Game.prototype._wipeBoard = function () {
  this.grid = [['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_']];
};

Game.prototype._addPoint = function () {
  this.turn.wins = this.turn.wins += 1;
};
