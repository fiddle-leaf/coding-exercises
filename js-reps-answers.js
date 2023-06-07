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
    console.log(ninja.toUpperCase() + "!");
}

/*      *       *   Methods: Revisited    *       *       *       *
 * Do the following and console.log the final results
 * Note: if you have to add to the array, feel free to add any movie you'd like
 */
//Here is a list of favMovies:
const favMovies = [
    'Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 
    'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 
    'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 
    'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 
    'Imitation of Life', 'Snatch', 'Fast and Furious'];

//use the .sortmethod 
const sortedFavMovies = favMovies.sort();
//Thought question: what did this do to the array? Did it permanently alter it?
// yes
console.log("Did .sort() alter the og array?\t", favMovies === sortedFavMovies ? "Yes" : "No");

//Use the method pop
favMovies.pop();

//push "Guardians of the Galaxy"
favMovies.push();

//Reverse the array
const reversedFavMovies = favMovies.reverse();

//Use the shiftmethod
favMovies.shift();

//unshift- what does it return?
//the added item?
const unshiftedFavMovie = favMovies.unshift();
console.log(unshiftedFavMovie);             //it actually returns the length of the array

//splice"Django Unchained" and add "Avatar"
//favMovies.splice(3, 1, "Avatar");

//(try finding the index of "Django Unchained", instead of counting it yourself)
favMovies.includes("Django Unchained") ? favMovies.splice(favMovies.lastIndexOf("Django Unchained"), 1, "Avatar") 
: console.log("Movie not here");

//Thought question: did this permanently alter our array?
// yes?
console.log(favMovies);                     //og array was changed

//slicethe last half of the array (challenge yourself and try to programatically 
//determine the middle of the array rather than counting it and hard coding it)
favMovies.slice(favMovies.length/2)
//Thought question: did this permanently alter our array?
// no?
console.log(favMovies);                     //nope!

//store the value of your slice in a variable, console.log it - 
let halfFavMovies = favMovies.slice(favMovies.length/2);
//Thought question: what is going on here?
//console.log your final results
console.log('\nslice() method returns a copy of sliced items in array:');
console.log(halfFavMovies);

//After running the above tasks, console.log the index of "Fast and Furious"
//-We removed it from the array, what value do we get when we look for the index of something that is not in the array?
// undefined?
console.log(favMovies.indexOf('Fast and Furiou')); //-1

//Thought question: that we declared the variable favMovies with const, 
//and yet, we were allowed to change the array. Weird? Should we have used let?
console.log('\nconst keyword refers to the immutable reference of an Array, not to its never-changing values.');

/*      *       *   Where is Waldo    *       *       *       *
 * With the following multi-dimensional array 
 * */
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

//remove "Eggbert"
whereIsWaldo.splice(1, 1);

//change "Neff" to "No One"
whereIsWaldo[1][2] = "No One";

//Access and console.log "Waldo" 
console.log('\nDid I find Waldo?\t', 
            whereIsWaldo[2][1][1] == "Waldo" ? "Yes" : "No!");

//test
console.log(whereIsWaldo[0], whereIsWaldo[1], [whereIsWaldo[2]]);