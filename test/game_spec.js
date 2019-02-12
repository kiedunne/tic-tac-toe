
describe('Game', () => {
  let game;

  describe('Starting a new game', () => {
    beforeEach(() => {
      player1 = new Player('X')
      player2 = new Player('O')
      gameStatus = new Status()
      game = new Game(player1, player2, gameStatus);
    });

    it('creates a new grid with 9 empty spaces', () => {
      expect(game.grid.length).toEqual(3);
      expect(game.grid.flat().length).toEqual(9);
    });

    it('can place X at a position on the grid', () => {
      game.move(0, 0);
      expect(game.grid).toEqual([['X', '_', '_'], ['_', '_', '_'], ['_', '_', '_']]);
    });

    it('cannot place a symbol if already full', () => {
      game.move(0, 0);
      expect(() => {
      game.move(0, 0);
        }).toThrowError('Spot taken!');
    });

    it('cannot enter a non-number', () => {
      expect(() => {
      game.move('0', '0');
      }).toThrowError('Row and column must be be a number!');
    });

    it('can change the players turn', () => {
      game._changeTurn();
      expect(game.turn.symbol).toEqual('O');
      game._changeTurn();
      expect(game.turn.symbol).toEqual('X');
    });

    it('clears grid after a win', () => {
      game.move(0,0);
      game.move(0,1);
      game.move(1,1);
      game.move(2,1);
      game.move(2,2);
      expect(game.grid).toEqual([['_', '_', '_'], ['_', '_', '_'], ['_', '_', '_']]);
    });

    it('gives a point to a winning player', () => {
      game.move(0,0);
      game.move(0,1);
      game.move(1,1);
      game.move(2,1);
      game.move(2,2);
      game.move(2,0);
      expect(game.turn.wins).toEqual(1);
    });
  });
});
