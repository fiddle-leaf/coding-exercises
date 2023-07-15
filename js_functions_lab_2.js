/**
 *  *   *   Practice What You Learned   *   *   *   *
 * Goal: This lab provides an opportunity to practice defining and coding some real-world functions.
 * 
 * by: shanon - github.com/fiddle-leaf
 */

const displayResults = (x, y) => {
    return console.log(x + "\t", y);
}

/**
 *  *   *   REQUIREMENTS    *   *   *
 *  * Define and code all the functions below this time and Incorporate what you learned about Big O.
 *  * Define the functions using the approach as specified (either as a function expression or declaration).
 *  * Be sure to number each function with a comment above it.
 *  * After each function, call it at least once and console.logthe results.
 **/
const programTitle = `*\t*\t* Practice What You Learned *\t*\t*`;
console.log(programTitle);
console.log("* Functions Edition\n");
// QUESTION 1 provided.

/**
 * QUESTION 2
 * Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
 **/

const maxOfThree = (...x) => {
    let temp = 0;
    for (let i = 0; i < x.length; i++){
        x[i] > temp ? temp = x[i] : false;
    }

    return `${temp} from [${x.join(", ")}]`;
}

displayResults("Log the max of three:", maxOfThree(4, 56, 34));

/**
 * Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.
 */

function isCharAVowel(char){
    char = char.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    return vowels.includes(char) ? `Yes! '${char}'` : `No. '${char}' is not a vowel`;
}

displayResults("Is character a vowel?", isCharAVowel('y'));

/**
 * Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.
 */
const sumArray = (array) => {
    let total = 0;
    for (let i = 0; i < array.length; i++){
        total += array[i];
    }
    return `Array [${array.join(", ")}] total is ${total}`;
}
displayResults("Sum of array:", sumArray([22, 6, 7, 9]));

/**
 * Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40
 */
const multiplyArray = (array) => {
    let product = 1;
    for (item of array){
        product *= item;
    }

    return `Product of [${array.join(", ")}] is ${product}`;
}

displayResults("Product of array:", multiplyArray([2, 1, 2, 7]));

/**
 * Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
 */

const numArgs = (...arg) => {
    return `${arg.length} arguments passed: [${arg.join(", ")}]`};

displayResults("Arguments in function:", numArgs(6, "hello!", 9, 0));

/**
 * Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor";
 */

function reverseString (string) {
    let array = string.split("");
    array = array.reverse();

    return `'${string}' reversed is ${array.join("")}`;
}

displayResults("Reverse the string:", reverseString("selene"));

/**
 * Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.
 */

const longestStringInArray = (array) => {
    let longestArrayItem = "";

    for (i of array){
        i.length > 0 ? longestArrayItem = i : false;
    }

    return `${i}(length: ${i.length}) of [${array.join(", ")}]`;
}

displayResults("Longest string of array:", longestStringInArray(
            ["hello", "hair", "music", "technology", "fergalicious"]
));

/**
 * Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].
 */

function stringsLongerThan (array, number) {
    const longestStrings = [];

    for (i of array) {
        i.length > number ? longestStrings.push(i) : false;
    }

    return `[${longestStrings.join(", ")}] are longer than ${number}`;
}

displayResults("Strings longer than specified number:", stringsLongerThan(
    ["basketball", "egg-roll", "mountain", "popularity"], 8
))
