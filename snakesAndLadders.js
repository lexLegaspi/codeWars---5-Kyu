// Introduction
// Snakes and Ladders is an ancient Indian board game regarded today as a worldwide classic. It is played between two or more players on a gameboard having numbered, gridded squares. A number of "ladders" and "snakes" are pictured on the board, each connecting two specific board squares. (Source Wikipedia)


// Task
// Your task is to make a simple class called SnakesLadders. The test cases will call the method play(die1, die2) independantly of the state of the game or the player turn. The variables die1 and die2 are the die thrown in a turn and are both integers between 1 and 6. The player will move the sum of die1 and die2.

// The Board

// Rules
// There are two players and both start off the board on square 0.
// Player 1 starts and alternates with player 2.
// You follow the numbers up the board in order 1=>100
// If the value of both die are the same then that player will have another go.
// Climb up ladders. The ladders on the game board allow you to move upwards and get ahead faster. If you land exactly on a square that shows an image of the bottom of a ladder, then you may move the player all the way up to the square at the top of the ladder. (even if you roll a double).
// Slide down snakes. Snakes move you back on the board because you have to slide down them. If you land exactly at the top of a snake, slide move the player all the way to the square at the bottom of the snake or chute. (even if you roll a double).
// Land exactly on the last square to win. The first person to reach the highest square on the board wins. But there's a twist! If you roll too high, your player "bounces" off the last square and moves back. You can only win by rolling the exact number needed to land on the last square. For example, if you are on square 98 and roll a five, move your game piece to 100 (two moves), then "bounce" back to 99, 98, 97 (three, four then five moves.)
// If the Player rolled a double and lands on the finish square “100” without any remaining moves then the Player wins the game and does not have to roll again.
// Returns
// Return "Player n Wins!" Where n is winning player that has landed on square 100 without any remainding moves left.

// Return "Game over!" if a player has won and another player tries to play.

// Otherwise return Player n is on square x. Where n is the current player and x is the sqaure they are currently on.

// Good luck and enjoy!

// My Solution: 

class SnakesLadders {
    constructor(location = [0,0], player = 1) {
        this.location = location
        this.player = player
        this.gameOver = false
    }

    play(die1, die2) {
      if (this.gameOver) {
          return "Game over!"

      }
      const roll = die1 + die2
      const idx = this.player - 1

      this.location[idx] += roll

      if (this.location[idx] > 100) {
          this.location[idx] = 100 - (this.location[idx] - 100)
          }

      this.jump(idx)
      if (this.location[idx] === 100) {
          this.gameOver = true
          return `Player ${this.player} Wins!`
          }

      const result = `Player ${this.player} is on square ${this.location[idx]}`

      if (die1 !== die2) {
          this.player = this.player === 1 ? 2 : 1
          }

      return result
    }

  
    jump(idx) {
      switch (this.location[idx]) {
        case 2: 
        this.location[idx] = 38;
        break;
        case 7: 
        this.location[idx] = 14;
        break;
        case 8: 
        this.location[idx] = 31;
        break;
        case 15: 
        this.location[idx] = 26;
        break;
        case 16: 
        this.location[idx] = 6;
        break;
        case 21: 
        this.location[idx] = 42;
        break;
        case 28: 
        this.location[idx] = 84;
        break;
        case 36: 
        this.location[idx] = 44;
        break;
        case 46: 
        this.location[idx] = 25;
        break;
        case 49: 
        this.location[idx] = 11;
        break;
        case 51: 
        this.location[idx] = 67;
        break;
        case 62: 
        this.location[idx] = 19;
        break;
        case 64: 
        this.location[idx] = 60;
        break;
        case 71: 
        this.location[idx] = 91;
        break;
        case 74: 
        this.location[idx] = 53;
        break;
        case 78: 
        this.location[idx] = 98;
        break;
        case 87: 
        this.location[idx] = 94;
        break;
        case 89: 
        this.location[idx] = 68;
        break;
        case 92: 
        this.location[idx] = 88;
        break;
        case 95: 
        this.location[idx] = 75;
        break;
        case 99: 
        this.location[idx] = 80;
        break;
        default:
        break;
          
        
      }
      
      return this
    }
}