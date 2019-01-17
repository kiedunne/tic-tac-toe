function Grid() {
  this.grid = ['','','','','','','','','']
};

Grid.prototype.move = function(position) {
  if(this.grid[position] == "X") {
    throw new Error('Spot taken!');
  } else if(Number.isInteger(position) == false) {
    throw new Error('Must be a number.');
  }else {
    this.grid[position] = "X";
  }
  console.log(this.grid);
};
