
/**
 * I. Variables & Datatypes
 * A. Q + A
 */
//A.1 Assign value to a variable
let variable_name = "variable"

//A.2 Change value of the variable
variable_name = "other variable"

//A.3 Assign existing vatiable to a new variable
let new_variable = variable_name

//A.4 What are declare, assign, and define?
let declare = "The 'let' keyword declares the variable <declare>";
let assign = "The single equal sign (=), assigns the declare variable to the value on the right";
let define = "Variable definition is the varible name, the assignment operator, and its value";

//A.5 What is pseudocode, why do it?
//A.6 Thinking of the problem vs. solving it:

/**
 * B. Strings
 * For all other questions that involve writing code, you can solve them via the following instructions.
 */
//B.1 Create a variable called firstVariable
let firstVariable;

//B.2 Assign it the value of the string "Hello World"
firstVariable = "Hello World";

//B.3 Change the value of this variable to some number
firstVariable = 22

//B.4 Store the value of firstVariablein a new variable called secondVariable
let secondVariable = firstVariable

//B.5 Change the value of secondVariableto any string.
secondVariable = "Hi Mother Earth"

//B.6 What is the value of firstVariable?
console.log(firstVariable);             //22

//B.7 Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
//      B7.1--ex: Hello, my name is Jean Valjean
let yourNameand = "Shanon"
console.log("Hello, my name is " + yourNameand);

/**
 * C. Booleans
 * Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console
 */
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');

// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false)
/*console.log(e  'Kevin');
console.log(a __ b ___ c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a __ a ___ d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 __ '48');*

/**
 * D. The farm
 */
//Declare a variable animal. Set it to be either "cow" or something else
let animal = "goat"
//Write code that will print out "mooooo" if the it is equal to cow
if (animal == "cow") {
    console.log("Mooooooo");
    //Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
} else {
    console.log("Hey! You are not a cow...");
}

//Commit

/**
 * E. Driver's Ed 
 */
//Make a variable that holds a person's age; be semantic
let driversAge

//Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
if (driversAge > 16) {
    console.log("Here are the keys!");
} else {
    console.log("Sorry, you are too young. :(");
}

/**
 * II. Loops
 * A. The basics
 */
//Write a loop that will print out all the numbers from 0 to 10, inclusive
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//Write a loop that will print out all the numbers from 10 up to and including 400
for (let i = 10; i <= 400; i++) {
    console.log(i);
}

//Write a loop that will print out every third number starting with 12 and going no higher than 4000
for (let i = 12; i <= 4000; i++) {
    if (i % 3 == 0) {
        console.log(i);
    }
}

/**
 * B. Get even
 */
//Print out the numbers that are within the range of 1 - 100
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        //Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
        console.log(i + " <-- is an even number");
    } else {
        console.log(i);
    }
}

/**
 * C. Give me Five
 */
//For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        //For numbers divisible by both three and five, be sure your code prints both messages
        console.log(`I found a ${i}. Three is a crowd. High five!`);
    } else if (i % 3 == 0) {
        //Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
        console.log(`I found a ${i}. Three is a crowd.`);
    } else if (i % 5 == 0) {
        console.log(`I found a ${i}. High five!`);
    }
}


/**
 * D. Savings account
 */
//Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
let bank_account = 0
for (let i = 0; i <= 10; i++) {
    bank_account += i;
}
//Check your work! Your bank_account should have $55 in it.
console.log(bank_account);

//You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
let bonusPay = 0
for (let i = 0; i <= 100; i++){
    bonusPay += i*2
}
//Check your work! Your bank_account should have $10,100 in it.
console.log(bonusPay);

/**
 * III. Arrays & Control flow
 * A. Talk about it:
 *  * What are the things in an array called?
 *      * elements
 *  * Do Arrays guarantee those things will be in order?
 *      * no
 *  * What real-life thing could you model with an array?
 *      * user input data, collecting numbers or organized data
 */
//B. Create an array that contains three quotes and store it in a variable called quotes
let quotes = ["Shining like diamonds in a rocky world", 
            "There is a thief out on the loose",
            "How could you run off on us?"];
/**
 * C. Accessing elements
 * Given the following array const randomThings = [1, 10, "Hello", true]
 */
const randomThings = [1, 10, "Hello", true]
//How do you access the 1st element in the array?
let arrayFirst = randomThings[0];
//Change the value of "Hello"to "World"
randomThings[2] = "World";
//Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);

/**
 * D. Change values
 * Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
 */
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

//What would you write to access the 3rd element of the array?
console.log("Array third element:\t", ourClass[2]);
//Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat"
//Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
//console.log(ourClass);

/**
 * E. Mix It Up
 * Note: You don't really need .splice() for these. You could use it, but there are simpler array methods that are more appropriate.
 * Given the following array: const myArray = [5, 10, 500, 20]
 */
const myArray = [5, 10, 500, 20]
//Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
myArray.push("SJ");
myArray.push("SSPS");
//Remove the 5 from the beginning of the array.
myArray.shift()
//Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");
//Remove the string of your choice from the end of the array.
myArray.pop()
//Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
let arrayReturnValue = myArray.reverse()     //returns revered array, changes original array too
console.log(arrayReturnValue);

/**
 * F. Biggie Smalls
 */
//Create a variable that contains an integer.
let devInt = 22
/**
 * Write an if ... elsestatement that:
 * console.log()s "little number" if the number is entered is less than 100
 * console.log()s big numberif the number is greater than or equal to 100.
 * */ 
if (devInt >= 100) {
    console.log("Big number!");
} else {
    console.log("Little number!");
}

/**
 * G. Monkey in the Middle
 * Write an if ... else if ... else statement:
 * console.log() little number if the number entered is less than 5.
 * If the number entered is more than 10, log big number.
Otherwise, log "monkey".
 */
//using devInt variable
if (devInt < 5){
    console.log("Little number");
} else if (devInt > 10) {
    console.log("Big number");
} else {
    console.log("Monkey");
}

/**
 * H. What's in Your Closet?
 * Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
 */
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

//What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

//Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.splice(5, 0, "raybans");

//Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset.splice(5, 1, "stained knit hat");

//Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
let thomsOOTDShirt = thomsCloset[0][0];
//In the same way, access one item from Thom's pants array.
let thomsOOTDPants = thomsCloset[1][1];
//Access one item from Thom's accessories array.
let thomsOOTDSunnies = thomsCloset[2][2];
//Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom's Outfit of the Day (OOTD): ${thomsOOTDShirt} with some ${thomsOOTDPants} and his favorite sunnies: ${thomsOOTDSunnies}`);
//Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1].splice(2, 1, "footie pajamas");

 /**
  * B. printCool
  * Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.
  */
 const printCool = (name) => {
    console.log(`${name} is cool.`);
 }
 printCool("Jay")

 /**
  * C. calculateCube
  * Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
  */
 const calculateCube = (x) => {return x ** 3};
 console.log(calculateCube(47));

/**
 * D. isVowel
 * Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
 */
const isVowel = (char) => {
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    if (vowels.includes(char.toLowerCase())){
        return true
    } else {
        return false
    }
}
console.log(isVowel("A"), isVowel("p"));

/**
 * E. getTwoLengths
 * Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
 */
const getTwoLengths = (x, y) => {
    let stringLengthX = x.length;
    let stringLengthY = y.length;

    return [stringLengthX, stringLengthY]
}
console.log(getTwoLengths("hello mate", "goodye mate"));

/**
 * F. getMultipleLengths
 * Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
 */
let myStringArray = ["Jay is 27 years old.", 
                    "I met him in 2021.", 
                    "Unfortunately, he is an Aquarius."]
const getMultipleLengths = (array) => {
    const arrayOfLengths = [];
    array.forEach(element => {
        let itemLength = element.length;
        arrayOfLengths.push(itemLength);
    });
    return arrayOfLengths;
}
console.log(getMultipleLengths(myStringArray));

/**
 * G. maxOfThree
 * Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
 */
const maxOfThree = (a, b, c) => {
    let numCollection = [a, b, c];
    const random = x => {return Math.floor(Math.random()*x)};
    if (a == b == c) {
        return numCollection[random(3)];
    } else if (a == b || a == c || b == c) {
        if (a < b || a < c) {
            return b;
        } else if (b < c || b < a) {
            return a;
        } else {
            return c;
        }
    } else {
        let bigNum = 0
        numCollection.forEach(num => {
            if (num > bigNum) {
                bigNum = num;
            } 
        })
        return bigNum;
    }
}

console.log(maxOfThree(15, 8, 32));
console.log(maxOfThree(15, 15, 15));
console.log(maxOfThree(10, 5, 10));

/**
 * H. printLongestWord
 * Write a function printLongestWord that accepts a single argument, an array of strings
 * The method should return the longest word in the array. 
 * In case of a tie, the method should return the word that appears first in the array.
 */
function printLongestWord(array) {
    let maxWordLength = 0
    let longWord
    array.forEach(element => {
        if (element.length > maxWordLength) {
            maxWordLength = element.length
            longWord = element
        }
    });
    return `${longWord}:\t${maxWordLength} letters.`
}

console.log(printLongestWord(["Superlicious", "Cucumber", "Football"]));

/**
 * Objects
 * Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.
 * A. Make a user object
 */
//Create an object called user.
const user = {
//Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.
    name: "Shanon Palomino Salinas",
    email: "shanon@limetortillachip.com",
    age: 25,
    purchased: []
}

/**
 * B. Update the user 
 */
//Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
const userUpdate = {...user};
userUpdate.email = "shanonps@outlook.com"

//Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
userUpdate.age++

/**
 * C. Adding keys and values
 * You have decided to add your user's location to the data that you want to collect.
 */
//Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).
userUpdate.location = "Maryland, USA"
console.log(userUpdate);

/**
 * D. Shopaholic!
 * ur user has purchased an item! They have purchased some "carbohydrates, peace of mind, and Merino jodhpurs". 
 * Using .push(), add the strings to the purchasedarray.
 */
user.purchased.push("Carbohydrates");
user.purchased.push("Peace of Mind");
user.purchased.push("Merino jodhpurs");
//Console.log just the "Merino jodhpurs" from the purchasedarray.
console.log(user.purchased[2]);
console.log(user);

/**
 * E. Object-within-object
 * Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
 */
//Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {
    name: "Jay Davis",
    age: 27,
    location: "Washington, DC",
    purchased: []
}
//Console.log just the friend's name
console.log(user.friend.name);

//Console.log just the friend's location
console.log(user.friend.location);

//CHANGE the friend's age to 55
user.friend.age = 55;

//The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
user.friend.purchased.push("The One Ring")

//The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
user.friend.purchased.push("A Latte")

//Console.log just "A latte" from the friend's purchasedarray.
console.log(user.friend.purchased[1]);
//console.log(user.friend);

/**
 * F. Loops
 */
//Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
for (let i = 0; i < user.purchased.length; i++){
    console.log(user.purchased[i]);
}
//Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
for (let i = 0; i < user.friend.purchased.length; i++){
    console.log(user.friend.purchased[i]);
}

/**
 * G. Functions can operate on objects
 * The function does not need a returnstatement, 
 * it will merely modify the user object.
 * Write a single function updateUser that takes no
 * parameters. When the function is run, it should:
 *      * increment the user's age by 1
 *      * make the user's name uppercase
 * Write a function oldAndLoud that performs the exact same tasks as updateUser, but takes a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with use as the argument.
 */
const updateUser = () => {
    user.age++
    user.name = user.name.toUpperCase();
}
//updateUser();
//console.log(user);

//Call your oldAndLoudfunction with use as the argument.
const oldAndLoud = (x) => {
    x.age++
    x.name = x.name.toUpperCase();
}

oldAndLoud(user);
console.log(user);
