/* 
    1. Write a program that loop that makes seven calls to console.log to output the following triangle:
    #
    ##
    ###
    ####
    #####
    ######
    #######
//  */
//     1. For Loop 7 times
//     2. line change every call
//     3. how to iterate number of # for each loop
const triangle = function () {
  let firstStar = "";
  for (let i = 0; i < 7; i++) {
    firstStar += "*";
    console.log(firstStar);
  }
};

triangle();

/*
    2. Write a program that creates a string that represents an 8×8 grid, 
    using newline characters to separate lines. 
    At each position of the grid there is either a space or a "#" character. 
    The characters should form a chessboard.
*/
const chess = function () {
  let chessBoard = "";
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      (i + j) % 2 === 0 ? (chessBoard += " ") : (chessBoard += "#");
    }
    chessBoard += "\n";
  }
  console.log(chessBoard);
};

chess();
