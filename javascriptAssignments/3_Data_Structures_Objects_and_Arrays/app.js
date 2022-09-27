/*
    1. The sum of a range
    console.log(sum(range(1, 10)));
    Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

    Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

    As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. 
    If no step is given, the elements go up by increments of one, corresponding to the old behavior. 
    The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 
    Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

    // Your code here.

    console.log(range(1, 10));
    // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    console.log(range(5, 2, -1));
    // → [5, 4, 3, 2]
    console.log(sum(range(1, 10)));
    // → 55
*/

const rangeFunction = function (a, b) {
  let array = [];
  for (let i = 0; i < b - a + 1; i++) {
    array.push(a + i);
  }
  return array;
};

const rangeSum = function (arr) {
  let sumNum = 0;
  for (let i = 0; i < arr.length; i++) {
    sumNum += arr[i];
  }
  return sumNum;
};

const rangeFunctionStep = function (a, b, c) {
  numLoops = Math.trunc(Math.abs((a - b) / c)) + 1;
  //   console.log(numLoops);
  //   console.log(a, b, c);
  let array = [];

  // when increment c is positive (1, 5, 2)
  // (5, 2, -1)
  if (c > 0) {
    for (let i = 0; i < numLoops; i++) {
      array.push(a + i * c);
    }
  }
  // when increment c is negative (5, 2 , -1)
  else {
    for (let i = 0; i < numLoops; i++) {
      array.push(a + i * c);
    }
  }
  return array;
};

// console.log(range(1, 10));
// // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2] -> [5, 4, 3, 2].

// console.log(rangeFunctionStep(1, 10, 2));
// console.log(rangeFunctionStep(5, 2, -2));
/*
    2. Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 
    
    let list = {
                value: 1,
                rest: {
                    value: 2,
                    rest: {
                    value: 3,
                    rest: null
                    }
                }
                };
    Also write a listToArray function that produces an array from a list. Then add a helper function prepend, 
    which takes an element and a list and creates a new list that adds the element to the front of the input list, 
    and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) 
    or undefined when there is no such element.
*/

const arrayToList = function (inputArray) {
  let list = {};
  if (inputArray.length > 0) {
    list = prepend(inputArray[0], arrayToList(inputArray.slice(1)));
  } else {
    return null;
  }
  return list;
};

function prepend(firstEl, restList) {
  return { value: firstEl, rest: restList };
}

// console.log(arrayToList([1, 3, 5]));

function listToArray(inputList) {
  currentArray = [inputList.value];
  if (inputList.rest) {
    currentArray = currentArray.concat(listToArray(inputList.rest));
  }
  return currentArray;
}

// console.log(
//   listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } })
// );

function nth(list, nr) {
  if (nr == 0) {
    return list.value;
  } else {
    return nth(list.rest, nr - 1);
  }
}

// console.log(
//   nth({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }, 1)
// );

/*
    3. Arrays have a reverse method that changes the array by inverting the order in which its elements appear. 
    For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
    The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 
    The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. 
    Neither may use the standard reverse method.

    Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations?
    Which one runs faster?

    // Your code here.

    console.log(reverseArray(["A", "B", "C"]));
    // → ["C", "B", "A"];

    let arrayValue = [1, 2, 3, 4, 5];
    reverseArrayInPlace(arrayValue);
    console.log(arrayValue);
    // → [5, 4, 3, 2, 1]
*/
function reverseArray(list1) {
  let newArray1 = [];
  let numLoops = list1.length;

  for (i = numLoops - 1; i >= 0; i--) {
    newArray1.push(list1[i]);
  }

  return newArray1;
}

console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(arrayToInvert) {
  // calculate the length of the array
  invertArrayLength = arrayToInvert.length;

  // calculate half the length of the array
  numLoops = Math.floor(invertArrayLength / 2);

  // loop that many times and swap the first and last elements
  for (i = 0; i < numLoops; i++) {
    // hold on to the current number
    var holdNum = arrayToInvert[i];

    // get the position of the swap number
    var swapPos = invertArrayLength - 1 - i;

    // replace the current number with the swap number
    arrayToInvert[i] = arrayToInvert[swapPos];

    // put the hold number into the swap number
    arrayToInvert[swapPos] = holdNum;
  }

  // return the inverted array
  return arrayToInvert;
}
// function arrayValue(list2) {
//   let newArray2 = [];
// }

/*
    4. Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, 
    where the values of the properties are equal when compared with a recursive call to deepEqual.
*/
function deepEqual(first, second, indentation = "") {
  if (typeof first === typeof second) {
    if (typeof first === "object") {
      if (first !== null) {
        firstKeys = Object.keys(first);
        secondKeys = Object.keys(second);
        if (firstKeys.length == secondKeys.length) {
          trackInequalities = [];
          for (i = 0; i <= firstKeys.length - 1; i++) {
            trackInequalities.push(
              deepEqual(first[firstKeys[i]], second[secondKeys[i]], "    ")
            );
          }
          return !trackInequalities.includes(false);
        } else {
          // Different amount of keys
          return false;
        }
      } else {
        // Both are null
        return true;
      }
    } else {
      return first === second;
    }
  } else {
    return false;
  }
}

function test(assertion, expected, actual) {
  console.log(assertion, expected === actual ? "OK" : "FAILED");
}

test(
  "Shallow deepEqual with same identities should yield true",
  true,
  deepEqual(1, 1)
);
test(
  "Shallow deepEqual with different identities should yield false",
  false,
  deepEqual(1, 2)
);
test(
  "Deep deepEqual with same identities should yield true",
  true,
  deepEqual(
    { value: "test", rest: { value: "test2", rest: null } },
    { value: "test", rest: { value: "test2", rest: null } }
  )
);
test(
  "Deep deepEqual with different identities should yield false",
  false,
  deepEqual(
    { value: "test", rest: { value: "test2", rest: null } },
    { value: "test", rest: { value: "diff", rest: null } }
  )
);
test(
  "Deep deepEqual with identical objects containing arrays should yield true",
  true,
  deepEqual(
    { value: "test", rest: ["test", "test2", "test3"] },
    { value: "test", rest: ["test", "test2", "test3"] }
  )
);
