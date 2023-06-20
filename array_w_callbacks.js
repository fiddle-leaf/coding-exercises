/**
 * Array: Callbacks lab
 * Shanon Palomino Salinas (github.com/fiddle-leaf)
 * 6/16/2023
 */
// The first question is for the numbers array. 
// The second question is for the words array.
// var prints little stars "*    *"
let estrellas = "*\t*\t";
// function takes paramters: action and text for repeated actions
const test = (text = "", action) => {
        let styled = `${text}: ${action}`;
        
        if (Array.isArray(action)){
                test(text, "[" + action.join(", ") + "]");
        } else if (action === undefined || action == -1) {
                console.log(text + ": Not found.");
        }else {
                console.log(styled);
        }
 } 


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
test("Example number array", nums.join(", "));

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
test("Example words array", panagram.join(", "));
console.log(estrellas.repeat(5));
/**
 * 1. Every
 * determine if every number is greater than or equal to 0
 * determine if every word shorter than 8 characters
 */

let questionOutput = "Every number of the array is greater than or equal to 0";
test(questionOutput, nums.every(e => e>=0));

questionOutput = "Every word is shorter than 8 characters";
test(questionOutput, panagram.every(element => element.length < 8));

/**
 * 2. Filter
 * filter the array for numbers less than 4
 * filter words that have an even length
 */
questionOutput = "Filter the array for numbers less than 4"
test(questionOutput, nums.filter(element => element < 4));
test("Filter words that have an even length", 
        panagram.filter(e => e.length%2 == 0));

/**
 * 3. Find
 * find the first value divisible by 5
 * find the first word that is longer than 5 characters
 */
test("Find first value divisible by 5", nums.find(e => e%5 == 0));
test("Find the first word that is longer than 5 characters",
        panagram.find(e => e.length > 5));

/**
 * Find Index
 * find the index of the first number that is divisible by 3
 * find the index of the first word that is less than 2 characters long
 */
test("Find the index of the first number that is divisible by 3", 
        nums.findIndex(e => e%3 == 0));
test("Find the index of the first word that is less than 2 characters long",
        panagram.findIndex(e => e.length < 2));

/**
 * For Each
 * console.log each value of the nums array multiplied by 3
 * console.log each word with an exclamation point at the end of it
 */

console.log("Console.log each value of the nums array multiplied by 3");
nums.forEach(e => console.log(e*3));
console.log("console.log each word with an exclamation point at the end of it");
panagram.forEach(word => console.log(word + "!"));

/**
 * Map
 * make a new array of each number multiplied by 100
 * make a new array of all the words in all uppercase
 */
test("Make a new array of each number multiplied by 100",
            nums.map(e => e*100).join(", "));
test("Make a new array of all the words in all uppercase",
            panagram.map(word => word.toUpperCase()).join(", "));

/**
 * Some
 * Find out if some numbers are divisible by 7
 * Find out if some words have the letter ain them
 */
test("Some numbers are divisible by 7",
            nums.some(e => e%7 == 0));
test("Some words have the letter 'ain' them",
            panagram.some(word => word == "ain"));


