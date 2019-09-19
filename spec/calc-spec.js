import { Calc } from "../src/calc";

describe("the calculator", function(){  
    let earth = new Calc("Earth", 27, 365, 75);
    let venus = new Calc("venus", 27, 224.7, 75);
    let mercury = new Calc("mercury", 27, 87.97, 75);
    let mars = new Calc("mars", 27, (earth.planetyear * 1.88), 75);
    let jupiter = new Calc("Jupiter", 27, (earth.planetyear * 11.86), 75);
    let saturn = new Calc("Saturn", 27, (earth.planetyear*29.46), 75);
    let uranus = new Calc("ha ha butt planet", 27, 84.01, 75);
    let neptune = new Calc("Neptune", 27, (earth.planetyear * 164.79), 75);
    let pluto = new Calc("pluto", 27, (earth.planetyear * 248.59), 75);
    let planets = [earth, venus, mercury, mars, jupiter, saturn, uranus, neptune, pluto];

    //earth

    it(`earth calculates age by planet properly`, function(){
        
        console.log(earth.runcalcs());
        expect(earth.agebyplanet).toBe(27);
    });
    it(`earth calculates age by planet properly`, function(){
        
        console.log(earth.runcalcs());
        expect(earth.expectancybyplanet).toBe(48);
    });

    //venus

    it(`venus calculates age by planet properly`, function(){
        
        console.log(venus.runcalcs());
        expect(venus.agebyplanet).toBe(43);
    });
    it(`venus calculates age by planet properly`, function(){
        console.log(venus.runcalcs());
        expect(venus.expectancybyplanet).toBe(78);
    });

    //mercury
    it(`mercury calculates age by planet properly`, function(){
        
        console.log(mercury.runcalcs());
        expect(mercury.agebyplanet).toBe(112);
    });
    it(`mercury calculates age by planet properly`, function(){
        console.log(mercury.runcalcs());
        expect(mercury.expectancybyplanet).toBe(199);
    });
    //mars
    it(`mars calculates age by planet properly`, function(){
        
        console.log(mars.runcalcs());
        expect(mars.agebyplanet).toBe(14);
    });
    it(`mars calculates age by planet properly`, function(){
        console.log(mars.runcalcs());
        expect(mars.expectancybyplanet).toBe(25);
    });
    //jupiter
    it(`jupiter calculates age by planet properly`, function(){
        
        console.log(jupiter.runcalcs());
        expect(jupiter.agebyplanet).toBe(2);
    });
    it(`jupiter calculates age by planet properly`, function(){
        console.log(jupiter.runcalcs());
        expect(jupiter.expectancybyplanet).toBe(4);
    });
    //saturn
    it(`saturn calculates age by planet properly`, function(){
        
        console.log(saturn.runcalcs());
        expect(saturn.agebyplanet).toBe(0);
    });
    it(`saturn calculates age by planet properly`, function(){
        console.log(saturn.runcalcs());
        expect(saturn.expectancybyplanet).toBe(2);
    });
    //the butt planet
    it(`uranus calculates age by planet properly`, function(){
        
        console.log(uranus.runcalcs());
        expect(uranus.agebyplanet).toBe(117);
    });
    it(`uranus calculates age by planet properly`, function(){
        console.log(uranus.runcalcs());
        expect(uranus.expectancybyplanet).toBe(208);
    });
    //neptune
    it(`neptune calculates age by planet properly`, function(){
        
        console.log(neptune.runcalcs());
        expect(neptune.agebyplanet).toBe(0);
    });
    it(`neptune calculates age by planet properly`, function(){
        console.log(neptune.runcalcs());
        expect(neptune.expectancybyplanet).toBe(0);
    });
    //pluto
    it(`pluto calculates age by planet properly`, function(){
        
        console.log(pluto.runcalcs());
        expect(pluto.agebyplanet).toBe(0);
    });
    it(`pluto calculates age by planet properly`, function(){
        console.log(pluto.runcalcs());
        expect(pluto.expectancybyplanet).toBe(0);
    });
});