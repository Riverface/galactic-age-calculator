import {
    Calc
} from "../src/calc";
let earth = new Calc("Earth", 27, 365, 75);
let venus = new Calc("venus", 27, 224.7, 75);
let mercury = new Calc("mercury", 27, 87.97, 75);
let mars = new Calc("mars", 27, (earth.planetyear * 1.88), 75);
let jupiter = new Calc("Jupiter", 27, (earth.planetyear * 11.86), 75);
let saturn = new Calc("Saturn", 27, (earth.planetyear * 29.46), 75);
let uranus = new Calc("ha ha butt planet", 27, 84.01, 75);
let neptune = new Calc("Neptune", 27, (earth.planetyear * 164.79), 75);
let pluto = new Calc("pluto", 27, (earth.planetyear * 248.59), 75);
let planets = [earth, venus, mercury, mars, jupiter, saturn, uranus, neptune, pluto];

describe("the calculator for earth", function () {
    let earth = new Calc("Earth", 27, 365, 75);
    //earth
    it("is filled out properly before it is processed", function () {
        expect(earth.planetname != null);
        expect(earth.age != null);
        expect(earth.planetyear != null);
    });
    it(`calculates age by planet properly`, function () {
        console.log(earth.runcalcs());
        expect(earth.agebyplanet).toBe(27);
    });
    it(`calculates expectancy by planet properly`, function () {
        console.log(earth.runcalcs());
        expect(earth.expectancybyplanet).toBe(48);
    });
});
describe("the calculator for venus", function () {
    //venus
    it("is filled out properly before it is processed", function () {
        expect(venus.planetname != null);
        expect(venus.age != null);
        expect(venus.planetyear != null);
    });
    it(`calculates age by planet properly`, function () {
        console.log(venus.runcalcs());
        expect(venus.agebyplanet).toBe(43);
    });
    it(`calculates expectancy by planet properly`, function () {
        console.log(venus.runcalcs());
        expect(venus.expectancybyplanet).toBe(78);
    });
});

describe("the calculator for mercury", function () {
    //mercury
    it("is filled out properly before it is processed", function () {
        expect(mercury.planetname != null);
        expect(mercury.age != null);
        expect(mercury.planetyear != null);
    });
    it(` calculates age by planet properly`, function () {

        console.log(mercury.runcalcs());
        expect(mercury.agebyplanet).toBe(112);
    });
    it(` calculates expectancy by planet properly`, function () {
        console.log(mercury.runcalcs());
        expect(mercury.expectancybyplanet).toBe(199);
    });
});

describe("the calculator for mars", function () {
    //mars
    it("is filled out properly before it is processed", function () {
        expect(mars.planetname != null);
        expect(mars.age != null);
        expect(mars.planetyear != null);
    });
    it(`calculates age by planet properly`, function () {
        console.log(mars.runcalcs());
        expect(mars.agebyplanet).toBe(14);
    });
    it(`calculates expectancy by planet properly`, function () {
        console.log(mars.runcalcs());
        expect(mars.expectancybyplanet).toBe(25);
    });
});

describe("the calculator for jupiter", function () {
    //jupiter
    it("is filled out properly before it is processed", function () {
        expect(jupiter.planetname != null);
        expect(jupiter.age != null);
        expect(jupiter.planetyear != null);
    });
    it(`calculates age by planet properly`, function () {
        console.log(jupiter.runcalcs());
        expect(jupiter.agebyplanet).toBe(2);
    });
    it(`calculates expectancy by planet properly`, function () {
        console.log(jupiter.runcalcs());
        expect(jupiter.expectancybyplanet).toBe(4);
    });
});
describe("the calculator for saturn", function () {

    //saturn
    it("is filled out properly before it is processed", function () {
        expect(saturn.planetname != null);
        expect(saturn.age != null);
        expect(saturn.planetyear != null);
    });
    it(` calculates age by planet properly`, function () {
        console.log(saturn.runcalcs());
        expect(saturn.agebyplanet).toBe(0);
    });
    it(` calculates expectancy by planet properly`, function () {
        console.log(saturn.runcalcs());
        expect(saturn.expectancybyplanet).toBe(2);
    });
});
describe("the calculator for the funny butt planet", function () {

    //the butt planet
    it("is filled out properly before it is processed", function () {
        expect(uranus.planetname != null);
        expect(uranus.age != null);
        expect(uranus.planetyear != null);
    });
    it(`calculates age by planet properly`, function () {
        console.log(uranus.runcalcs());
        expect(uranus.agebyplanet).toBe(117);
    });
    it(`calculates expectancy by planet properly`, function () {
        console.log(uranus.runcalcs());
        expect(uranus.expectancybyplanet).toBe(208);
    });

});
//neptune
describe("the calculator for neptune", function () {

    it("is filled out properly before it is processed", function () {
        expect(neptune.planetname != null);
        expect(neptune.age != null);
        expect(neptune.planetyear != null);
    });
    it(`calculates age by planet properly`, function () {
        console.log(neptune.runcalcs());
        expect(neptune.agebyplanet).toBe(0);
    });
    it(`calculates expectancy by planet properly`, function () {
        console.log(neptune.runcalcs());
        expect(neptune.expectancybyplanet).toBe(0);
    });
});

//pluto
describe("the calculator for pluto", function () {

    it("is filled out properly before it is processed", function () {
        expect(pluto.planetname != null);
        expect(pluto.age != null);
        expect(pluto.planetyear != null);
    });
    it(`calculates age by planet properly`, function () {
        console.log(pluto.runcalcs());
        expect(pluto.agebyplanet).toBe(0);
    });
    it(`calculates expectancy by planet properly`, function () {
        console.log(pluto.runcalcs());
        expect(pluto.expectancybyplanet).toBe(0);
    });
});