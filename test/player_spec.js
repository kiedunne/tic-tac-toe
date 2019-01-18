describe('Player', function () {
  beforeEach(function () {
    player = new Player()
  })

  describe('can place moves on the grid', function () {
    it('greates a new grid with 9 empty spaces', function () {
      expect(player.grid.length).toEqual(9)
    })

    it('can place an X at a position', function () {
      player.move(1)
      expect(player.grid).toEqual(['', 'X', '', '', '', '', '', '', ''])
    })

    it('cannot place an X at if it already has a symbol', function () {
      player.move(1)
      expect(function () {
        player.move(1)
      }).toThrowError('Spot taken!')
    })

    it('cannot enter a non-number', function () {
      expect(function () {
        player.move('1')
      }).toThrowError('Must be a number.')
    });

    it('can change the players turn', function () {
      player.switchTurn()
      expect(player.newTurn).toEqual('O')
    })
  });
});
