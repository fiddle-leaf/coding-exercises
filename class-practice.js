class Cat {
    constructor(catName, age, furCoat){
        this.catName = catName;
        this.age = age;
        this.furCoat = furCoat;
    }

    displayName(){
        console.log(`Owner's cat name:\t${this.catName}`);
    }

    displayAge(){
        console.log(`${this.catName}'s age:\t${this.age}`);
    }

    catBreed(){
        console.log(`Coat type:\t${this.furCoat}`);
    }

}

const georgie = new Cat("Georgie The Cat", 3, "orange tabby");
const luna = new Cat("Luna Tuna", 1, "silver");

const nameProperties = (obj) => {
    console.log("Name Property:\t\t"+ obj.catName, 
            "\nAge Property:\t\t"+ obj.age, 
            "\nFurcoat Property:\t"+ obj.furCoat)
}

//Print property values with function
console.log("*\tProperties of classes")
nameProperties(georgie);
nameProperties(luna);
console.log("*\t*\t*\t*\t*\t*\t*\t*\t*\t");
//Print methods for classes
console.log("*\tMethods of classes")
georgie.displayName();
georgie.displayAge();
georgie.catBreed();

luna.displayName();
luna.displayAge();
luna.catBreed();