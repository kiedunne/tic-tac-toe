

describe('Player', () => {
  let player;

  beforeEach(() => {
    player = new Player();
  });
  describe('Placing symbol on grid', () => {
    it('can place X at a position on the grid', () => {
      player.move(0, 0);
      expect(player.grid).toEqual([['X', '', ''], ['', '', ''], ['', '', '']]);
    });

    it('cannot place a symbol if already full', () => {
      player.move(0, 0);
      expect(() => {
        player.move(0, 0);
      }).toThrowError('Spot taken!');
    });

    it('cannot enter a non-number', () => {
      expect(() => {
        player.move('0', '0');
      }).toThrowError('Row and column must be be a number!');
    });
  });
});
