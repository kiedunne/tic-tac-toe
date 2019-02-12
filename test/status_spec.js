import { Status } from '../src/status';

describe('Status', () => {
  let status;

  describe('Check for winning and loosing', () => {
    beforeEach(() => {
      status = new Status();
    });

    it('can identify a draw', () => {
      const gridlose = [['X', 'O', 'X'],
        ['X', 'O', 'O'],
        ['O', 'X', 'X']];
      status.check(gridlose);

      expect(status.msg).toEqual('Draw');
    });

    it('can identify an ongoing game', () => {
      const gridcontinue = [['X', 'O', '_'],
        ['X', '_', '_'],
        ['O', '_', '_']];
      status.check(gridcontinue);

      expect(status.msg).toEqual('Next player turn!');
    });

    it('can identify a column 1 vertical winning game', () => {
      const gridwin = [['X', 'O', '_'],
        ['X', 'O', '_'],
        ['X', '_', '_']];
      status.check(gridwin);

      expect(status.msg).toEqual('Vertical Winner!');
    });

    it('can identify a column 2 vertical winning game', () => {
      const gridwin = [['X', 'O', '_'],
        ['_', 'O', 'X'],
        ['X', 'O', '_']];
      status.check(gridwin);

      expect(status.msg).toEqual('Vertical Winner!');
    });

    it('can identify a column 3 vertical winning game', () => {
      const gridwin = [['_', 'O', 'X'],
        ['_', 'O', 'X'],
        ['_', '_', 'X']];
      status.check(gridwin);

      expect(status.msg).toEqual('Vertical Winner!');
    });

    it('can identify a row 1 horizontal winning game', () => {
      const gridwin = [['X', 'X', 'X'],
        ['O', '_', '_'],
        ['_', 'O', '_']];
      status.check(gridwin);

      expect(status.msg).toEqual('Horizontal Winner!');
    });

    it('can identify a row 2 horizontal winning game', () => {
      const gridwin = [['_', 'X', '_'],
        ['O', 'O', 'O'],
        ['_', 'X', '_']];
      status.check(gridwin);

      expect(status.msg).toEqual('Horizontal Winner!');
    });

    it('can identify a row 3 horizontal winning game', () => {
      const gridwin = [['_', 'O', '_'],
        ['_', '_', 'O'],
        ['X', 'X', 'X']];
      status.check(gridwin);

      expect(status.msg).toEqual('Horizontal Winner!');
    });

    it('can identify a left diagonal winning game', () => {
      const gridwin = [['_', 'O', 'X'],
        ['_', 'X', 'O'],
        ['X', '_', '_']];
      status.check(gridwin);

      expect(status.msg).toEqual('Diagonal Winner!');
    });

    it('can identify a row right diagonal winning game', () => {
      const gridwin = [['O', '_', 'X'],
        ['_', 'O', 'X'],
        ['_', '_', 'O']];
      status.check(gridwin);

      expect(status.msg).toEqual('Diagonal Winner!');
    });
  });
});
