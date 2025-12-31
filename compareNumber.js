// I saw @myjinxin2015's Simple Fun #264: Compare Two Integers and thought, "hey what if the two numbers ain't integers, ain't always positive and could have leading zeros?"

// Compare two numbers given as strings. Return 'less' if a < b, 'equal' if a = b, and 'greater' if a > b.

// NOTE
// The numbers a and b are given as string
// They can be positive or negative
// They can have leading zeros in the characteristic part and trailing zero in the mantissa part
// 12.34 => characteristic part = 12; mantissa part = 34

// My Solution:

function compare(a,b){
  
  if(a.includes(".") || b.includes(".")){
    if(Number(a) > Number(b)) return "greater"
    else if (Number(b) > Number(a)) return "less"
    else return "equal"
  }
 
  if(BigInt(a) > BigInt(b)) return "greater"
    else if (BigInt(b) > BigInt(a)) return "less"
    else return "equal"
}