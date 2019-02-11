function Status(){
  this.msg = ''
}

Status.prototype.check = function (grid) {
  if (grid.flat().includes('_') === false) {
    this.msg = 'Draw';
  } else if (this._verticalWin(grid) === true) {
    this.msg = 'Vertical Winner!';
  } else {
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
