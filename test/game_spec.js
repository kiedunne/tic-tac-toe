'use strict'

describe('Game', function () {
  var game;

  describe('Starting a new game', function () {
    beforeEach(function () {
      game = new Game()
    });

    it('creates a new grid with 9 empty spaces', function () {
      expect(game.grid.length).toEqual(3)
      expect(game.grid.flat().length).toEqual(9)
    });

    it('can change the players turn', function () {
    game.switchTurn()
      expect(game.turn).toEqual('O')
    game.switchTurn()
      expect(game.turn).toEqual('X')
    game.switchTurn()
      expect(game.turn).toEqual('O')
    game.switchTurn()
      expect(game.turn).toEqual('X')
    });
  });

  describe('Check for winning and loosing', function () {
    beforeEach(function () {
      game = new Game()
    });

    it('can identify a losing game', function () {
    var gridlose = [['X', 'O', 'X'],
                    ['X', 'O', 'O'],
                    ['O', 'X', 'X']]
    game.checkStatus(gridlose)
    expect(game.gameStatus).toEqual('Draw')
    });

    it('can identify a vertical winning game', function () {
    var gridwin = [['X', 'O', ''],
                   ['X', 'O', ''],
                   ['X', '', '']]
    game.checkStatus(gridwin)
    expect(game.gameStatus).toEqual('Winner!')
    });
  });
});
