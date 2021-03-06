# Tic Tac Toe Tech Test

### Technology

* Javascript
* Jasmine

### Setup

```
git clone https://github.com/kiedunne/tic-tac-toe
cd tic-tac-toe
open SpecRunner.html in any browser
```

### Instructions
Open index.html in any browser and open the console to play the game

### Typical Game
```
game = new Game()
game.move(0,2)
  0: (3) ["_", "_", "X"]
  1: (3) ["_", "_", "_"]
  2: (3) ["_", "_", "_"]
game.move(0,1)  
  0: (3) ["_", "O", "X"]
  1: (3) ["_", "_", "_"]
  2: (3) ["_", "_", "_"]
```

### Testing

Tests are run with Jasmine. Code coverage is 100% with Codecov
```
open SpecRunner.html in any browser
```

### Linting

Run ESLint on source and test files:
```
npm run lint
npm run linttest
```
Run ESLint on each file:
```
./node_modules/.bin/eslint ./src/*.js
./node_modules/.bin/eslint ./test/*.js
```

## Specifications

The rules of tic-tac-toe are as follows:

* There are two players in the game (X and O)
* Players take turns until the game is over
* A player can claim a field if it is not already taken
* A turn ends when a player claims a field
* A player wins if they claim all the fields in a row, column or diagonal
* A game is over if a player wins
* A game is over when all fields are taken

Build the business logic for a game of tic tac toe. It should be easy to implement a working game of tic tac toe by combining your code with any user interface, whether web or command line.
