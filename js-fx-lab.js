/**
 * Write a function called minusOne that takes a parameter num. 
 * Assuming the argument is a number, print the argument -1.
 */
const minusOne = (x) => {
    return x -=1;
}

console.log(minusOne(35));

/**
 * Write a function makeSentence that takes three parameters 
 * and concatenates them into a fully formed sentence.
 */
const makeSentence = (x, y, z) => {
    return x + " " + y + " " + z + ".";
}
console.log(makeSentence("My", "favorite", "puppy"));

/**
 * Write a function called getLastElement that takes a parameter arr.
 * Invoke the function with an array as the argument.
 * The function should print the last element within the array.
 */

const getLastElement = (array) => {
    return array[array.length-1];
}

console.log(getLastElement(["hot dogs", "burgers", "sausage"]));