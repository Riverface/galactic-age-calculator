import {
    Calc
} from "../src/calc";
let earth = new Calc("Earth", 27, 365, 75);
let venus = new Calc("venus", 27, 224.7, 75);
let mercury = new Calc("mercury", 27, 87.97, 75);
let mars = new Calc("mars", 27, (earth.planetYear * 1.88), 75);
let jupiter = new Calc("Jupiter", 27, (earth.planetYear * 11.86), 75);
let saturn = new Calc("Saturn", 27, (earth.planetYear * 29.46), 75);
let uranus = new Calc("ha ha butt planet", 27, 84.01, 75);
let neptune = new Calc("Neptune", 27, (earth.planetYear * 164.79), 75);
let pluto = new Calc("pluto", 27, (earth.planetYear * 248.59), 75);

describe("the calculator for earth", function () {
    let earth = new Calc("Earth", 27, 365, 75);
    //earth
    it("is filled out properly before it is processed", function () {
        expect(earth.planetName != null);
        expect(earth.age != null);
        expect(earth.planetYear != null);
    });
    it(`calculates age by planet properly`, function () {
        console.log(earth.runcalcs());
        expect(earth.ageByPlanet).toBe(27);
    });
    it(`calculates expectancy by planet properly`, function () {
        console.log(earth.runcalcs());
        expect(earth.expectancyByPlanet).toBe(48);
    });
});
describe("the calculator for venus", function () {
    //venus
    it("is filled out properly before it is processed", function () {
        expect(venus.planetName != null);
        expect(venus.age != null);
        expect(venus.planetYear != null);
    });
    it(`calculates age by planet properly`, function () {
        console.log(venus.runcalcs());
        expect(venus.ageByPlanet).toBe(43);
    });
    it(`calculates expectancy by planet properly`, function () {
        console.log(venus.runcalcs());
        expect(venus.expectancyByPlanet).toBe(78);
    });
});

describe("the calculator for mercury", function () {
    //mercury
    it("is filled out properly before it is processed", function () {
        expect(mercury.planetName != null);
        expect(mercury.age != null);
        expect(mercury.planetYear != null);
    });
    it(` calculates age by planet properly`, function () {

        console.log(mercury.runcalcs());
        expect(mercury.ageByPlanet).toBe(112);
    });
    it(` calculates expectancy by planet properly`, function () {
        console.log(mercury.runcalcs());
        expect(mercury.expectancyByPlanet).toBe(199);
    });
});

describe("the calculator for mars", function () {
    //mars
    it("is filled out properly before it is processed", function () {
        expect(mars.planetName != null);
        expect(mars.age != null);
        expect(mars.planetYear != null);
    });
    it(`calculates age by planet properly`, function () {
        console.log(mars.runcalcs());
        expect(mars.ageByPlanet).toBe(14);
    });
    it(`calculates expectancy by planet properly`, function () {
        console.log(mars.runcalcs());
        expect(mars.expectancyByPlanet).toBe(25);
    });
});

describe("the calculator for jupiter", function () {
    //jupiter
    it("is filled out properly before it is processed", function () {
        expect(jupiter.planetName != null);
        expect(jupiter.age != null);
        expect(jupiter.planetYear != null);
    });
    it(`calculates age by planet properly`, function () {
        console.log(jupiter.runcalcs());
        expect(jupiter.ageByPlanet).toBe(2);
    });
    it(`calculates expectancy by planet properly`, function () {
        console.log(jupiter.runcalcs());
        expect(jupiter.expectancyByPlanet).toBe(4);
    });
});
describe("the calculator for saturn", function () {

    //saturn
    it("is filled out properly before it is processed", function () {
        expect(saturn.planetName != null);
        expect(saturn.age != null);
        expect(saturn.planetYear != null);
    });
    it(` calculates age by planet properly`, function () {
        console.log(saturn.runcalcs());
        expect(saturn.ageByPlanet).toBe(0);
    });
    it(` calculates expectancy by planet properly`, function () {
        console.log(saturn.runcalcs());
        expect(saturn.expectancyByPlanet).toBe(2);
    });
});
describe("the calculator for the funny butt planet", function () {

    //the butt planet
    it("is filled out properly before it is processed", function () {
        expect(uranus.planetName != null);
        expect(uranus.age != null);
        expect(uranus.planetYear != null);
    });
    it(`calculates age by planet properly`, function () {
        console.log(uranus.runcalcs());
        expect(uranus.ageByPlanet).toBe(117);
    });
    it(`calculates expectancy by planet properly`, function () {
        console.log(uranus.runcalcs());
        expect(uranus.expectancyByPlanet).toBe(208);
    });

});
//neptune
describe("the calculator for neptune", function () {

    it("is filled out properly before it is processed", function () {
        expect(neptune.planetName != null);
        expect(neptune.age != null);
        expect(neptune.planetYear != null);
    });
    it(`calculates age by planet properly`, function () {
        console.log(neptune.runcalcs());
        expect(neptune.ageByPlanet).toBe(0);
    });
    it(`calculates expectancy by planet properly`, function () {
        console.log(neptune.runcalcs());
        expect(neptune.expectancyByPlanet).toBe(0);
    });
});

//pluto
describe("the calculator for pluto", function () {

    it("is filled out properly before it is processed", function () {
        expect(pluto.planetName != null);
        expect(pluto.age != null);
        expect(pluto.planetYear != null);
    });
    it(`calculates age by planet properly`, function () {
        console.log(pluto.runcalcs());
        expect(pluto.ageByPlanet).toBe(0);
    });
    it(`calculates expectancy by planet properly`, function () {
        console.log(pluto.runcalcs());
        expect(pluto.expectancyByPlanet).toBe(0);
    });
});