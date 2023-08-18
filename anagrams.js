/**
 * Anagrams JavaSCript program
 * WISE Week 6, Day 2
 * www.github.com/fiddle-leaf
 */
// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const validateChar = (char) => {
  console.log(char.charCodeAt());
  return !(char.charCodeAt() < 96
    ? char
    : char.charCodeAt > 123
    ? char
    : false);
};
const anagram = (x, y) => {
  const ogStrings = [x, y];
  let sum = 0,
    total = 0;
  //string split into characters to filter our symbols and space
  x = x.toLowerCase().split("");
  y = y.toLowerCase().split("");

  //console.log(x, y);

  //filter symbols
  x = x.filter((char) => validateChar(char));
  y = y.filter((char) => validateChar(char));

  console.log(x, y);

  for (let char of x) {
    sum += char.charCodeAt();
  }

  for (let char of y) {
    total += char.charCodeAt();
  }

  return total === sum
    ? console.log(
        "Yes, the strings: " +
          `"${ogStrings[0]}" & "${ogStrings[1]}"` +
          " are anagrams!"
      )
    : console.log("No, strings are not anagrams!");
};

anagram("RAIL! SAFETY!", "fairy tales");
