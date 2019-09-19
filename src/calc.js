export class Calc{
    constructor(planetname, age, planetyear, average){
    this.planetname = planetname;
    this.age = age;
    this.planetyear = planetyear;

    this.average = average;
    }
    
    calculateplanetyear(){
        this.averagebyplanet = this.average/this.planetyear;   
        this.agebyplanet = (this.age * 365)/this.planetyear;
    }
    calculateExpectancy(){
        this.expectancy = (this.age - this.average);
        this.expectancybyplanet = this.agebyplanet - this.averagebyplanet;
    }
    outPut(){
        this.output = `Your age is ${this.age} and the average lifespan for your generation is ${this.average}.`;
        this.output += `Your age on ${this.planetname} is ${this.agebyplanet}!`;
        if(this.expectancy < 0){
            this.output += `You are most likely to live for ${Math.abs(this.expectancy)} more years!`;
        }
        if(this.expectancy>0){
            this.output += `You've lived ${parseMath.abs(this.expectancy)} past life expectency!`;
        }
        this.output += `Your life expectancy on ${this.planetname} is ${this.expectancybyplanet}!`;
return this.output;        
    }
    runcalcs(){
    this.calculateplanetyear();
    this.calculateExpectancy();
    return this.outPut();

    }
}

