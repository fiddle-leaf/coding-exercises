/**
 * Hamster class
 * attributes:
 *      * owner - string, initially set as an empty string
 *      * name - string, set the name from parameter in constructor method
 *      * price - integer, set as 15
 * methods:
 *      * wheelRun() - log "squeak squeak"
 *      * eatFood() - log "nibble nibble"
 *      * getPrice() - return the price
 **/
class Hamster {
    static owner = "";
    constructor(name) {
        this.name = name;
        this.price = 13;
    }

    wheelrun() {
        return console.log("Squeak Squeak!");
    }

    eatFood() {
        return console.log("Nibble... nibble.");
    }

    getPrice() {
        return this.price;
    }
}

/**
 * Person class
 * 
 */

class Person {
    constructor(name, age, heigh, weight, mood, hamsters, bankAccount) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0
        this.hamsters = [];
        this.bankAccount = 0;
    }

    eat(x) {
        for (let i = 0; i < x; i++) {
            ++this.weight, ++this.mood;
        } 
    }

    exercise(x){
        for (let i = 0; i < x; i++) {
            --this.weight;
        }   
    }

    ageUp(x){
        this.age += x;
        this.height += x;
        this.weight += x;
        this.mood -= x;
        this.bankAccount += 10 * x 
    }

    getName(){
        return console.log(`My name is ${this.name}`);
    }

    getAge(){
        return console.log(`Age:\t${this.age}`);
    }

    getWeight(){
        return console.log(`Weight:\t${this.weight}lbs`);
    }

    greet(){
        return console.log(`Good morning!`);
    }

    buyHamster(pet){
        this.hamsters.push(pet);
        this.mood += 10;
        this.bankAccount -= pet.getPrice();
    }

}

/**
 * Create a Story with your Person class
 */
//Instantiate a new Person named Timmy & give timmy 5 years
const timmy = new Person("Timmy");
timmy.age = 5;
//console.log(timmy);                          //test

//Have him eat five times.
timmy.eat(5);
//console.log(timmy);

//Have him exercise five times.
timmy.exercise(5);
//console.log(timmy);

//Age Timmy 9 years.
timmy.ageUp(9);
//console.log(timmy.age);

//Create a hamster named "Gus".
const gus = new Hamster("Gus Palomino");
gus.wheelrun();

//Set Gus's owner to the string "Timmy".
gus.owner = "Timmy";
//console.log(gus);

//Have Timmy "buy" Gus.
timmy.buyHamster(gus);
//console.log(timmy);

//Age Timmy 15 years.
timmy.ageUp(15);

//Have Timmy eat twice & exercise twice
timmy.eat(2);
timmy.exercise(2);

timmy.greet();
console.log(gus.owner);
timmy.getAge();
timmy.getWeight();
gus.eatFood();
console.log("Bank account balance:\t", "$"+timmy.bankAccount);
console.log("Pet name:\t", gus.name);
gus.wheelrun();
console.log("Mood Score:\t", timmy.mood);
