/*
    1. “flatten” an array of arrays into a single array that has all the elements of the original arrays.
*/
// let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]

function flatArray(listOfLists) {
  let newArray = [];
  listOfLists.map((list) => {
    newArray.push(...list);
  });
  return newArray;
}
console.log(flatArray([[1, 2, 3], [4, 5], [6]]));

/*
    2. Write a higher-order function loop that provides something like a for loop statement. 
    It takes a value, a test function, an update function, and a body function. 
    Each iteration, it first runs the test function on the current loop value and stops if that returns false.

    Then it calls the body function, giving it the current value. 
    Finally, it calls the update function to create a new value and starts from the beginning.
    When defining the function, you can use a regular loop to do the actual looping.
*/

function loop(value, test, update, execute) {
  if (test(value)) {
    execute(value);
    return loop(update(value), test, update, execute);
  } // else stop
}

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);

/*
    3. Analogous to the some method, arrays also have an every method. 
    This one returns true when the given function returns true for every element in the array. 
    In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

    Implement every as a function that takes an array and a predicate function as parameters. 
    Write two versions, one using a loop and one using the some method.
*/

function every(array, test) {
  for (let item of array) {
    if (test(item) === false) {
      return false;
    }
  }
  return true;
}

console.log(every([2, 4, 16], (n) => n < 10));

function every(array, test) {
  return !array.some((element) => !test(element));
}
/*
    4. Dominant writing direction
    Write a function that computes the dominant writing direction in a string of text. 
    Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
    
    The dominant direction is the direction of a majority of the characters that have a script associated with them. 
    The characterScript and countBy functions defined earlier in the chapter are probably useful here.
*/
// function characterScript(code) {
//   for (let script of SCRIPTS) {
//     if (script.ranges.some(([from, to]) => code >= from && code < to)) {
//       return script;
//     }
//   }
//   return null;
// }

// console.log(dominantDirection("Hello!"));
// // → ltr
// console.log(dominantDirection("Hey, مساء الخير"));
// // → rtl
// console.log(dominantDirection(""));
// // → no dominant direction found
// console.log(dominantDirection("Heyخير"));
// // → no dominant direction found
