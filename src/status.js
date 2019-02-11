function Status(){
  this.msg = ''
}

Status.prototype.check = function (grid) {
  if (grid.flat().includes('_') === false) {
    this.msg = 'Draw';
  } else if (this._verticalWin(grid) === true) {
    this.msg = 'Vertical Winner!';
  } else if (this._horizontalWin(grid) === true) {
    this.msg = 'Horizontal Winner!';
  } else if (this._diagonalWin(grid) === true) {
    this.msg = 'Diagonal Winner!';
  }
  else {
    this.msg = 'Next player turn!';
  }
};

Status.prototype._verticalWin = function (grid) {
  if (grid[0][0] === grid[1][0] && grid[0][0] === grid[2][0] && grid[0][0] !== '_') {
      return true
  } else if (grid[0][1] === grid[1][1] && grid[0][1] === grid[2][1] && grid[0][1] !== '_') {
      return true
  } else if (grid[0][2] === grid[1][2] && grid[0][2] === grid[2][2] && grid[0][2] !== '_') {
      return true
  } else {
      return false
  }
};

Status.prototype._horizontalWin = function (grid) {
  if (grid[0][0] === grid[0][1] && grid[0][0] === grid[0][2] && grid[0][0] !== '_') {
      return true
  } else if (grid[1][0] === grid[1][1] && grid[1][0] === grid[1][2] && grid[1][0] !== '_') {
      return true
  } else if (grid[2][0] === grid[2][1] && grid[2][0] === grid[2][2] && grid[2][0] !== '_'){
      return true
  } else {
      return false
  }
};

Status.prototype._diagonalWin = function (grid) {
  if (grid[0][2] === grid[1][1] && grid[0][2] === grid[2][0] && grid[0][2] !== '_') {
      return true
  } else if (grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2] && grid[0][0] !== '_') {
      return true
  } else {
      return false
  }
};
