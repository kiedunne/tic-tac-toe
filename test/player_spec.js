

describe('Player', () => {
  let player;

  it('creates a new player with a symbol', () => {
    player = new Player('X');
    expect(player.symbol).toEqual('X')
  });

});
