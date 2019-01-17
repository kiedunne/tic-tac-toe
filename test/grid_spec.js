describe('Grid', function () {
  beforeEach(function () {
    grid = new Grid()
  })

  describe('can place moves on the grid', function () {
    it('greates a new grid with 9 empty spaces', function () {
      expect(grid.grid.length).toEqual(9)
    })

    it('can place an X at a position', function () {
      grid.move(1)
      expect(grid.grid).toEqual(['', 'X', '', '', '', '', '', '', ''])
    })

    it('cannot place an X at if it already has a symbol', function () {
      grid.move(1)
      expect(function () {
        grid.move(1)
      }).toThrowError('Spot taken!')
    })

    it('cannot enter a non-number', function () {
      expect(function () {
        grid.move('1')
      }).toThrowError('Must be a number.')
    })
  })
})
