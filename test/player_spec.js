'use strict'

describe('Player', function () {
  var player

  beforeEach(function() {
    player = new Player();
  });
  describe('Placing symbol on grid', function () {
    it('can place X at a position on the grid', function () {
      player.move(0, 0)
      expect(player.grid).toEqual([['X', '', ''], ['', '', ''], ['', '', '']])
    });

    it('cannot place a symbol if already full', function () {
      player.move(0, 0)
      expect(function () {
        player.move(0, 0)
      }).toThrowError('Spot taken!')
    });

    it('cannot enter a non-number', function () {
      expect(function () {
        player.move('0', '0')
      }).toThrowError('Row and column must be be a number!')
    });
  });
});
