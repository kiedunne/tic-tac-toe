
describe('Status', () => {
  let status;

  describe('Check for winning and loosing', () => {
    beforeEach(() => {
      status = new Status();
      game = new Game()
    });
  });

//
//   it('can identify a losing game', () => {
//     const gridlose = [['X', 'O', 'X'],
//       ['X', 'O', 'O'],
//       ['O', 'X', 'X']];
//     game.checkStatus(gridlose);
//     expect(game.gameStatus).toEqual('Draw');
//   });
//
//   it('can identify a column 1 vertical winning game', () => {
//     const gridwin = [['X', 'O', '_'],
//       ['X', 'O', '_'],
//       ['X', '_', '_']];
//     game.checkStatus(gridwin);
//     expect(game.gameStatus).toEqual('Vertical Winner!');
//   });
//
//   it('can identify a column 2 vertical winning game', () => {
//     const gridwin = [['X', 'O', '_'],
//       ['_', 'O', 'X'],
//       ['X', 'O', '_']];
//     game.checkStatus(gridwin);
//     expect(game.gameStatus).toEqual('Vertical Winner!');
//   });
//
//   it('can identify a column 3 vertical winning game', () => {
//     const gridwin = [['_', 'O', 'X'],
//       ['_', 'O', 'X'],
//       ['_', '_', 'X']];
//     game.checkStatus(gridwin);
//     expect(game.gameStatus).toEqual('Vertical Winner!');
//   });
//
//   it('can identify a row 1 horizontal winning game', function () {
//   var gridwin = [['X', 'X', 'X'],
//                  ['O', '_', '_'],
//                  ['_', 'O', '_']]
//   game.checkStatus(gridwin)
//   expect(game.gameStatus).toEqual('Horizontal Winner!')
//   });
//
//   it('can identify a row 2 horizontal winning game', function () {
//   var gridwin = [['_', 'X', '_'],
//                  ['O', 'O', 'O'],
//                  ['_', 'X', '_']]
//   game.checkStatus(gridwin)
//   expect(game.gameStatus).toEqual('Horizontal Winner!')
//   });
// });

});
