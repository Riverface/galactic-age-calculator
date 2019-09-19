import { Calc } from "../src/calc";

describe("the calculator", function(){
it("can take input",function(){
var earth = new Calc("Earth", 27, 365, 75);
var venus = new Calc("venus", 27, 224.7, 75);
var mercury = new Calc("mercury", 27, 87.97, 75);
var mars = new Calc("mars", 27, (earth.planetyear * 1.88), 75);
var jupiter = new Calc("Jupiter", 27, (earth.planetyear * 11.86), 75);
var saturn = new Calc("Saturn", 27, (earth.planetyear*29.46), 75);
var uranus = new Calc("ha ha butt planet", 27, 84.01, 75);
var neptune = new Calc("Neptune", 27, (earth.planetyear * 164.79), 75);
var pluto = new Calc("pluto", 27, (earth.planetyear * 248.59), 75);


console.log(earth.runcalcs());
console.log(venus.runcalcs());
console.log(mercury.runcalcs());
console.log(mars.runcalcs());
console.log(jupiter.runcalcs());
console.log(saturn.runcalcs());
console.log(uranus.runcalcs());
console.log(neptune.runcalcs());
console.log(pluto.runcalcs());
}); 

});