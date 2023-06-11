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
