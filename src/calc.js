export class Calc{
    constructor(planetname, age, planetyear, average){
    this.planetname = planetname;
    this.age = age;
    this.planetyear = planetyear;

    this.average = average;
    }
    
    calculateplanetyear(){
        this.averagebyplanet = average/planetyear;   
        this.agebyplanet = (this.age * 365)/planetyear;
    }
    calculateExpectancy(){
        this.expectancy = (this.age - this.average);
        this.expectancybyplanet = agebyplanet - averagebyplanet;
    }
    outPut(){
        this.output = `Your age is ${this.age} and the average lifespan for your generation is ${this.average}.`;
        this.output += `Your age on ${this.planetname} is ${this.agebyplanet}!`;
        this.output += `Your life expectancy on Earth is ${this.expectancy}!`;
        this.output += `Your life expectancy on ${this.planetname} is ${this.expectancybyplanet}!`;
    }
}

