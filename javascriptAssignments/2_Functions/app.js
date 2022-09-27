/*
    1. Write a function min that takes two arguments and returns their minimum.
    Checks whether the input is number or not
    and returns the lower of the two number
*/
const checkNumber = function (a, b) {
  if ((typeof a === "number") & (typeof b === "number")) {
    if (a - b > 0) {
      return b;
    } else {
      return a;
    }
  } else {
    alert("The input must be number!");
  }
};

console.log(checkNumber(1, 2));
console.log(checkNumber(-2, -3));
// console.log(checkNumber(1, "b"));

/*
    2. Define a recursive function isEven to determine whether a number is completely divisible by 2.
    The function should accept a single parameter (a positive, anegative or whole number) and return a Boolean.
*/

let isEven = function (n) {
  const // declare local variables/constants
    even = 0,
    odd = 1;
  if (n === 0) {
    alert("You need to put number other than 0");
  }
  if (n < 0) {
    n = -n;
  }
  if (n === even) {
    return true;
  } else if (n === odd) {
    return false;
  } else {
    //n -= 2; no need to reassign a value for a single use
    return isEven(n - 2); // return here
  }
};

// console.log(isEven(50));
// console.log(isEven(1));
// console.log(isEven(-1));
// console.log(isEven(-2));
// console.log(isEven(0));

/*
    3. Write a function countBs that takes a string as its only argument and 
    returns a number that indicates how many uppercase “B” characters there are in the string.
    Next, write a function called countChar that behaves like countBs, 
    except it takes a second argument that indicates the character that
     is to be counted (rather than counting only uppercase “B” characters). 
     Rewrite countBs to make use of this new function.
*/

const countBS = function (a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a.charAt(i) === "B") {
      count += 1;
    }
  }
  return count;
};

const countAbc = function (a, b) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a.charAt(i) === b) {
      count += 1;
    }
  }
  return count;
};
