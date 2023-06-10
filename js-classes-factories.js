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
    owner = "";
    static price = 13;

    constructor(name) {
        this.name = name;
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

    static eat(){
        ++this.weight, ++this.mood;
    }

    static exercise(){
        --this.weight;
    }

    static ageUp(){
        ++this.age;
        ++this.height;
        ++this.weight;
        --this.mood;
        this.bankAccount += 10
    }

    getName(){
        return console.log(`My name is ${super.name}`);
    }

    getAge(){
        return console.log(`Age:\t${this.age}`);
    }

    getWeight(){
        return console.log(`Weight:\t${this.weight}lbs}`);
    }

    greet(){
        return console.log(`Good morning Ms.${this.name}`);
    }

    buyHamster(Hamster){
        this.hamsters.push(Hamster);
        this.mood += 10;
        this.bankAccount -= super.getPrice();
    }



}