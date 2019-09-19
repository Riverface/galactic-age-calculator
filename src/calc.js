export class Calc{
    constructor(planetName, age, planetYear, average){
    this.planetName = planetName;
    this.age = age;
    this.planetYear = planetYear;

    this.average = average;
    }
    
    calculateplanetYear(){
        this.averageByPlanet = (this.average * 365)/this.planetYear;   
        this.ageByPlanet = parseInt((this.age * 365)/this.planetYear);
    }
    calculateExpectancy(){
        this.expectancy = (this.average - this.age  );
        this.expectancyByPlanet = parseInt( this.averageByPlanet - this.ageByPlanet);
    }
    outPut(){
        this.output = `Your age is ${this.age} and the average lifespan for your generation is ${this.average}.`;
        if(this.ageByPlanet == 0){
            this.output += `You would be less than a year old on ${this.planetName}!`;
        }
        else{
            this.output += `Your age on ${this.planetName} is ${this.ageByPlanet}!`;
        }
        if(this.expectancy > 0){
            this.output += `You are most likely to live for ${Math.abs(this.expectancy)} more years!`;
        }
        if(this.expectancy<0){
            this.output += `You've lived ${Math.abs(this.expectancyByPlanet)} past life expectency!`;
        }
        if(this.expectancyByPlanet > 0){
            this.output += `You are most likely to live for ${Math.abs(this.expectancyByPlanet)} more years!`;
        }
        if(this.expectancyByPlanet<0){
            this.output += `You've lived ${Math.abs(this.expectancyByPlanet)} past life expectency!`;
        }
        if(this.expectancy == 0){
            this.output += "Wow! You likely have less than a year left!";
        }
        if(this.expectancyByPlanet == 0){
            this.output += `Wow! You would likely have less than a year left living on ${this.planetName}`;
        }
return this.output;        
    }
    runcalcs(){
    this.calculateplanetYear();
    this.calculateExpectancy();
    return this.outPut();

    }
}

