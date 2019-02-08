function Status(){
  this.gameStatus = ''
}

Status.prototype.horizontalWin = function (grid) {
  if (grid.flat()[0] == grid.flat()[1] == grid.flat()[2]) {
    true
  } else if (grid.flat()[3] == grid.flat()[4] == grid.flat()[5]) {
    true
  } (grid.flat()[6] == grid.flat()[7] == grid.flat()[8])
    true
};

Status.prototype.verticalWin = function (grid) {
  if (grid.flat()[0] == grid.flat()[3] == grid.flat()[6]) {
      true
  } else if (grid.flat()[1] == grid.flat()[4] == grid.flat()[7]) {
      true
  } (grid.flat()[62] == grid.flat()[5] == grid.flat()[8])
      true
};
