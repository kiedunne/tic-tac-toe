

describe('Game', () => {
  let game;

  describe('Starting a new game', () => {
    beforeEach(() => {
      game = new Game();
    });

    it('creates a new grid with 9 empty spaces', () => {
      expect(game.grid.length).toEqual(3);
      expect(game.grid.flat().length).toEqual(9);
    });

    it('can change the players turn', () => {
      game.switchTurn();
      expect(game.turn).toEqual('O');
      game.switchTurn();
      expect(game.turn).toEqual('X');
      game.switchTurn();
      expect(game.turn).toEqual('O');
      game.switchTurn();
      expect(game.turn).toEqual('X');
    });
  });

  describe('Check for winning and loosing', () => {
    beforeEach(() => {
      game = new Game();
    });

    it('can identify a losing game', () => {
      const gridlose = [['X', 'O', 'X'],
        ['X', 'O', 'O'],
        ['O', 'X', 'X']];
      game.checkStatus(gridlose);
      expect(game.gameStatus).toEqual('Draw');
    });

    it('can identify a column 1 vertical winning game', () => {
      const gridwin = [['X', 'O', ''],
        ['X', 'O', ''],
        ['X', '', '']];
      game.checkStatus(gridwin);
      expect(game.gameStatus).toEqual('Vertical Winner!');
    });

    it('can identify a column 2 vertical winning game', () => {
      const gridwin = [['X', 'O', ''],
        ['', 'O', 'X'],
        ['X', 'O', '']];
      game.checkStatus(gridwin);
      expect(game.gameStatus).toEqual('Vertical Winner!');
    });

    it('can identify a column 3 vertical winning game', () => {
      const gridwin = [['', 'O', 'X'],
        ['', 'O', 'X'],
        ['', '', 'X']];
      game.checkStatus(gridwin);
      expect(game.gameStatus).toEqual('Vertical Winner!');
    });

    // it('can identify a row 1 horizontal winning game', function () {
    // var gridwin = [['X', 'X', 'X'],
    //                ['O', '', ''],
    //                ['', 'O', '']]
    // game.checkStatus(gridwin)
    // expect(game.gameStatus).toEqual('Horizontal Winner!')
    // });
    //
    // it('can identify a row 2 horizontal winning game', function () {
    // var gridwin = [['', 'X', ''],
    //                ['O', 'O', 'O'],
    //                ['', 'X', '']]
    // game.checkStatus(gridwin)
    // expect(game.gameStatus).toEqual('Horizontal Winner!')
    // });
  });
});
