/**
 * Governor Class
 * There is only one Governor in the state
 * add static methods and properties you'd expect a Governor to have
 * log the properties and test the methods (don't instantiate)
 **/
class Governor {
    static yearsInOffice = 23
    static degree = true
    static kids = 2

    static getExp(){
        console.log(`Governor has ${this.yearsInOffice} years in office.`);
    }

    static getDegreeStatus(){
        let hasDegree = this.degree == true ? "Yes!" : "Naur!";
        console.log("This the Governor get a degree?\t", hasDegree);      
    }

    static isFamilyMan(){
        let hasKids = this.kids > 0 ? `Yes! ${this.kids} kids!`
        : `Nope! ${this.kids} kids.`;

        console.log("Is the Governor a family man?\t", hasKids);      
    }
}

console.log(Governor.yearsInOffice, Governor.degree, Governor.kids);
Governor.getExp();
Governor.getDegreeStatus();
Governor.isFamilyMan();

/** 
 * Inheritance
 * Think of three properties all people share, set them with the constructor
 * Think of three methods all people share
 * Create a PostalWorker class that inherits from person, add some methods
 * Create a Chef class that inherits from person, add some methods
 * Create 2 PostalWorkers and 2 Chefs, log them and test all their methods
 **/
class Person {
    //set three properties with constructor
    constructor(name, age, favColor, job){
        this.name = name,
        this.age = age,
        this.favColor = favColor,
        this.job = job
    }

    //three methods all people share
    getIntroduction() {
        return `Hi! My name is ${this.name} and my favorite color is ${this.favColor}!`;
    }

    getPassword() {
        let pwd = `${this.favColor}${this.age}!`;
        return pwd;
    }

    getNickname(nickname) {
        return console.log(`Although, I am ${this.name}, sometimes my family calls me ${nickname}.`);
    }
}

//Create a PostalWorker class that inherits from person, add some methods

class PostalWorker extends Person {
    constructor(name, age, favColor, job, route) {
        super(name, age, favColor, job);
        this.route = route;
    }

    getWorkRoute() {
        console.log(`My ${this.job} route is:\t${this.route}`);
    }
}

//Create a Chef class that inherits from person, add some methods
class Chef extends Person {
    constructor(name, age, favColor, job, location){
        super(name, age, favColor, job);
        this.location = location;
    }


    getWorkLocation() {
        console.log(`I work in ${this.location} for my ${this.job} job.`);
    }
}

const amyFrench = new PostalWorker("Amy French", 55, "purple", "Georgia Ave", "Route 22");
const aidanBlue = new PostalWorker("Aidan Blue", 32, "blue", "Gallery Place Downtown", "Route 79");

//log properties and methods for PostalWorkers: Amy and Aidan
console.log(`\n${amyFrench.name} Postal Worker Properties:`,
            `${amyFrench.age}, \t${amyFrench.favColor}, `,
            `Working at:\t${amyFrench.job}`);
amyFrench.getWorkRoute();
console.log("My custom passsword would be:\t", amyFrench.getPassword());

//aidan PostalWorker
console.log(`\n${aidanBlue.name}'s Properties:\n`,
            `*\tWork Route: ${aidanBlue.route} on ${aidanBlue.job}.\n`,
            `*\tLet's get started on introductions\n`,
            aidanBlue.getIntroduction());
console.log("My custom password is:\t", aidanBlue.getPassword());
aidanBlue.getNickname("Ady");


const chefSelune = new Chef("Selune Sky", 26, "pink", "Chef", "New York City");
const chefSy = new Chef("Sky Jackson", 35, "none", "Executive Chef", "Denver, Colorado");

console.log("\n*\t*\t* Log chefs *\t*\t*");
console.log("The two head chefs:\t", chefSelune.name + " & " + chefSy.name);
console.log("Their ages are:\t", chefSelune.age + ", " + chefSy.age);
console.log("Sky's blurbs: ", chefSy.getIntroduction());
chefSelune.getNickname("Sely");
chefSelune.getWorkLocation();
console.log("Sky's custom password is:\t", chefSy.getPassword());
chefSy.getNickname("Jax")

/*
    HUNGRY FOR MORE: Objects & Classes
    *   *BankAccount class takes properties: ownerName, balance, acctNum; & has methods: deposit and withrdaw
        *CheckingAccount class, derives from Bank Account, takes addt properti overdraftEnabled, and addt method: override withdraw to implement overdraft feature
        *SavingsAccount class adds no addt properties and method overrides withdraw to disallow withdrawals completely

*/

class BankAccount {
    static acctNum = 0
    static updateMsg = 'Updated Account Balance:\t'
    constructor(ownerName, balance){
        this.ownerName = ownerName;
        this.balance = balance;
    }

    bankStatement(){
    //print out bank account info
    console.log('\n*\t*\tSelune Bank Statement\t*\t*');
    console.log(`Account Owner Name:\t\t${this.ownerName}`);
    console.log(`Bank Account Balance:\t\t$${this.balance.toFixed(2)}`);
    }

    deposit(money){
        //print title of action with amount
        console.log(`\n...Initiating deposit of $${money}...`)
        this.balance += money;
        console.log(`Successful! $${money} deposited to account.`);
        console.log(BankAccount.updateMsg, `$${this.balance.toFixed(2)}`);
    }

    withdraw(money){
        //print title of action with amount
        console.log(`\n...Withdrawing $${money} from account...`)
        this.balance -= money;
        console.log(`Successful! $${money} withdrawn from account.`);
        console.log(BankAccount.updateMsg, `$${this.balance.toFixed(2)}`);
    }

}

class CheckingAccount extends BankAccount {

    constructor(ownerName, balance, checkingNum, overdraftEnabled){
        super(ownerName, balance);
        this.overdraftEnabled = false;
        this.checkingNum = "000" + `${++BankAccount.acctNum}`;
    }

    enableOverdraft(){
        this.overdraftEnabled = true;
        return console.log('\n...Turning on overdraft...')
    }

    checkingStatement (){
        super.bankStatement()
        console.log(`Checking Account Number:\t${this.checkingNum}`);
        console.log('Overdraft:\t\t', this.overdraftEnabled ?'Enabled' : 'Disabled')
    }

    withdraw(money){
        //condition tests if overdraft is enabled generally
        // withdraw is allowed regardless
        if (this.overdraftEnabled){
            super.withdraw(money);
            console.log(`Account is $${0-this.balance.toFixed(2)} in overdraft.`);
        } else {
            //if withdraw is disabled, then negative balance is not possible
            if (this.balance - money < 0) {
                console.log(`\nERROR: Cannot withdraw $${money}. Turn on overdraft and try again.`)
            } else {
                //otherwise allow withdraw
                super.withdraw(money);
            }
        }
    }
}

class SavingsAccount extends BankAccount {
    constructor(ownerName, balance, savingsNum){
        super(ownerName, balance);
        this.balance = balance;
        this.savingsNum = "00" + `${BankAccount.acctNum}` + `${BankAccount.acctNum+1}`;
    }

    savingsStatement(){
        super.bankStatement()
        console.log(`Savings Account Number:\t\t${this.savingsNum}`);
    }

    withdraw(){
        console.log('\n*ERROR:\tCannot withdraw from this account.')
    }
}

function makeBankAccount(guestName, deposit, checking = true, savings = false){
    const checkingAcct = new CheckingAccount(guestName, deposit)
    const savingsAcct = new SavingsAccount(guestName, deposit=0)

    if (checking && savings){
        return [checkingAcct, savingsAcct];
    } else {
        if (checking) {
            return checkingAcct;
        } else if (savings){
            return savingsAcct;
        }
    }
}

const selene_user = makeBankAccount("Selene Palomino", 345);
selene_user.bankStatement()
const kevin_user = makeBankAccount("Kevin Palomino", 500, true, true);
kevin_user[0].bankStatement();
kevin_user[0].deposit(4555.67);
kevin_user[1].savingsStatement();
kevin_user[1].deposit(180);
kevin_user[1].withdraw(20);
