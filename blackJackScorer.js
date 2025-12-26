// Complete the function that determines the score of a hand in the card game Blackjack (aka 21).

// The function receives an array of strings that represent each card in the hand ("2", "3", ..., "10", "J", "Q", "K" or "A") and should return the score of the hand (integer).

// Scoring rules:
// Number cards count as their face value (2 through 10). Jack, Queen and King count as 10. An Ace can be counted as either 1 or 11.

// Return the highest score of the cards that is less than or equal to 21. If there is no score less than or equal to 21 return the smallest score more than 21.

// Examples
// ["A"]                           ==>  11
// ["A", "J"]                      ==>  21
// ["A", "10", "A"]                ==>  12
// ["5", "3", "7"]                 ==>  15
// ["5", "4", "3", "2", "A", "K"]  ==>  25

// My Solution:

function scoreHand(cards) {
  // TODO
  let aCount = 0
  let result = (cards.reduce((acc, curr) => {
    if (curr =="A")  aCount++
    return acc + numberValue(curr)
    
  }, 0))
    while (result > 21 && aCount > 0){
    result -= 10
    aCount -= 1
  }
  
  function numberValue(n){
    if (n === "A") return 11
    if (n === "J" || n === "Q" || n === "K") return 10
    else return Number(n)
  }
  

  
    return result
}