/*
    1. Code golf is a term used for the game of trying to express a particular program in as few characters as possible. 
    Similarly, regexp golf is the practice of writing as tiny a regular expression as possible to match a given pattern, and only that pattern.
    For each of the following items, write a regular expression to test whether any of the given substrings occur in a string. 
    The regular expression should match only strings containing one of the substrings described. Do not worry about word boundaries unless explicitly mentioned.
    When your expression works, see whether you can make it any smaller.
    1. car and cat
    2. pop and prop
    3. ferret, ferry, and ferrari
    4. Any word ending in ious
    5. A whitespace character followed by a period, comma, colon, or semicolon
    6. A word longer than six letters
    7. A word without the letter e (or E)
*/
function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  yes.forEach(function (s) {
    if (!regexp.test(s)) console.log("Failure to match '" + s + "'");
  });
  no.forEach(function (s) {
    if (regexp.test(s)) console.log("Unexpected match for '" + s + "'");
  });
}

verify(RegExp("/ca[rt]/"), ["my car", "bad cats"], ["camper", "high art"]);

verify(RegExp("/pr?op/"), ["pop culture", "mad props"], ["plop"]);

verify(
  /ferr(et|y|ari)/,
  ["ferret", "ferry", "ferrari"],
  ["ferrum", "transfer A"]
);

verify(
  /w+ious\b/,
  ["how delicious", "spacious room"],
  ["ruinous", "consciousness"]
);

verify(/s[.,:;]/, ["bad punctuation ."], ["escape the dot"]);

verify(/w{7,}/, ["hottentottententen"], ["no", "hotten totten tenten"]);

verify(
  /\b[a-df-z]+\b/,
  ["red platypus", "wobbling nest"],
  ["earth bed", "learning ape"]
);

/*
    2. Write an expression that matches only JavaScript-style numbers. 
    It must support an optional minus or plus sign in front of the number, the decimal dot, 
    and exponent notation—5e-3 or 1E10—again with an optional sign in front of the exponent. 
    Also note that it is not necessary for there to be digits in front of or after the dot, 
    but the number cannot be a dot alone. That is, .5 and 5. are valid JavaScript numbers, but a lone dot isn’t.
*/

let number = /^(\+|-|)(\d+(\.\d*)?|\.\d+)([eE](\+|-|)\d+)?$/;

for (let str of [
  "1",
  "-1",
  "+15",
  "1.55",
  ".5",
  "5.",
  "1.3e2",
  "1E-4",
  "1e+12",
]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
  }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."]) {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`);
  }
}
