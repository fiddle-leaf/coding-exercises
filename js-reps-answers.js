/**
 *  *   *   JAVASCRIPT REPS    *    *   *
 */

/**
 *      *       *   Easy Going    *       *       *       *
 * Write a for loop that will log the numbers 1 through 20.
 */
console.log('A loop that logs numbers 1 - 20:');
for (let i = 0; i <= 20; i++){
    console.log(`#${i}`);
}

/**
 *      *       *   Get Even    *       *       *       *
 * Write a for loop that 
 * logs only the even numbers in 0 through 200.
 */
console.log('\nLog only even numbers in 1 - 200:');
for (let i = 1; i <= 200; i++) {
    if (i % 2 == 0){
        console.log(i);
    }
}

/**
 *      *       *   Fizz Buzz    *       *       *       *
 * This is a classic problem that you should get really comfortable solving. 
 * If you've solved it before, try to make it more elegant and short.
 * Write a javascript application that logs all numbers from 1 - 100.
 *  * If a number is divisible by 3 log "Fizz" instead of the number.
 *  * If a number is divisible by 5 log "Buzz" instead of the number.
 *  * If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
 */
for (let i = 1; i <= 100; i++){
    i % 3 == 0 && i % 5 == 0 ? console.log("FizzBuzz") : 
    i % 3 == 0 ? console.log("Fizz") :
    i % 5 == 0 ? console.log("Buzz") :
    console.log(i);
}

/*      *       *   Wild Wild Life    *       *       *       *
 * Use the following arrays to answer the questions below: 
 * You should be modifying the elements by accessing them. 
 * It is up to you which methods to use.
 */

//name, species ,age, hometown
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// Plantee just had her birthday-
//- change Plantee's array to reflect her being a year older.
plantee[2]++;

//Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
wolfy[3] = "Gotham City";

//Give D'Art a second hometown by adding "Hawkins"
dart[3] = [dart[3], "Hawkins"];

//Porgee decides that Wolfy can't be named "Wolfy" anymore-
wolfy.shift();
//-remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
wolfy.unshift("Gameboy")

console.log(plantee, wolfy, dart[3]);       //log changed arrays

/*      *       *   Yell at the Ninja Turtles    *       *       *       *
 * As a developer, you'll be a lifelong learner and constantly encountering new things. 
 * We'll give you little stretches like this to get you used to looking at documentation
 *  and figuring some things out on your own. You've got this!
 */
//Create an array with the members of the ninja turtles
//(Donatello, Leonardo, Raphael, Michaelangelo)
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo'];

//Use a for of loop(not a typo - try it out! Try a for ofloop) 
//to call toUpperCase()on each of them and print out the result.
for (const ninja of ninjaTurtles) {
    console.log(ninja.toUpperCase() +"!");
}