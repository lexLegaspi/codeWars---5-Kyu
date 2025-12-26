// At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

// The restriction is that the characters in part1 and part2 should be in the same order as in s.

// The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

// For example:

// 'codewars' is a merge from 'cdw' and 'oears':

//     s:  c o d e w a r s   = codewars
// part1:  c   d   w         = cdw
// part2:    o   e   a r s   = oears


// My Solution:

function isMerge(s, part1, part2) {
  if (s == '') return false
  let strToArr = s.split('')
  let merged = part1.concat(part2).split('')
  if (strToArr.length != merged.length) return false
  for (let i=0; i<merged.length;i++){
    if (strToArr.includes(merged[i])){
      strToArr.splice(strToArr.indexOf(merged[i]),1)
    }
  }
  
  // strToArr.splice(strToArr.indexOf('o'),strToArr.indexOf('o'))
  if (strToArr.length != 0 ) return false
  else return true
}

// WRONG SOLUTION!!!!!!!!
