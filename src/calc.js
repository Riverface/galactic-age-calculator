export class Calc{
    constructor(planetname, age, planetyear, average){
    this.planetname = planetname;
    this.age = age;
    this.planetyear = planetyear;

    this.average = average;
    }
    
    calculateplanetyear(){
        this.averagebyplanet = (this.average * 365)/this.planetyear;   
        this.agebyplanet = parseInt((this.age * 365)/this.planetyear);
    }
    calculateExpectancy(){
        this.expectancy = (this.average - this.age  );
        this.expectancybyplanet = parseInt( this.averagebyplanet - this.agebyplanet);
    }
    outPut(){
        this.output = `Your age is ${this.age} and the average lifespan for your generation is ${this.average}.`;
        if(this.agebyplanet == 0){
            this.output += `You would be less than a year old on ${this.planetname}!`;
        }
        else{
            this.output += `Your age on ${this.planetname} is ${this.agebyplanet}!`;
        }
        if(this.expectancy > 0){
            this.output += `You are most likely to live for ${Math.abs(this.expectancy)} more years!`;
        }
        if(this.expectancy<0){
            this.output += `You've lived ${Math.abs(this.expectancybyplanet)} past life expectency!`;
        }
        if(this.expectancybyplanet > 0){
            this.output += `You are most likely to live for ${Math.abs(this.expectancybyplanet)} more years!`;
        }
        if(this.expectancybyplanet<0){
            this.output += `You've lived ${Math.abs(this.expectancybyplanet)} past life expectency!`;
        }
        if(this.expectancy == 0){
            this.output += "Wow! You likely have less than a year left!";
        }
        if(this.expectancybyplanet == 0){
            this.output += `Wow! You would likely have less than a year left living on ${this.planetname}`;
        }
return this.output;        
    }
    runcalcs(){
    this.calculateplanetyear();
    this.calculateExpectancy();
    return this.outPut();

    }
}

