class Animal {
    constructor(name, age, latinName, numberOfLegs) {

        this.name = name;
        this.age = age;
        this.latinName = latinName;
        this.numberOfLegs = numberOfLegs;
    }
    printAnimal() {
        console.log(`${this.name}'s latin name is: ${this.latinName}, it is ${this.age} old, and has ${this.numberOfLegs} legs`);
    }
};

class AquaticAnimal extends Animal {
    constructor(name, age, latinName, numberOfLegs, type, liveInSaltWater) {

        super(name, age, latinName, numberOfLegs);

        this.type = type;
        this.liveInSaltWater = liveInSaltWater;
        this.liveInFreshWater = !liveInSaltWater
    }
    set liveInSaltWater(liveInSaltWater) {

        if (liveInSaltWater === true) {
            this._liveInSaltWater = true;
            this._liveInFreshWater = false;
            return
        } else if (liveInSaltWater === false) {
            this._liveInFreshWater = true;
            this._liveInSaltWater = false;
            return
        } else {
            console.log("There is no such AquaticAnimal")
            return
        }

    }
    get liveInSaltWater() {

        this._liveInSaltWater;
        this._liveInFreshWater;
        return;
    }

    changeLifeEnvironment(changeTypeOfWater) {

        if (changeTypeOfWater === "salt") {
            this.liveInSaltWater = true;
            this.liveInFreshWater = false;
            return;

        } else if (changeTypeOfWater === "fresh") {
            this.liveInFreshWater = true;
            this.liveInSaltWater = false;
            return;

        } else {

            console.log("There is no such AquaticAnimal")
            return;
        }
    }
}



class FlyingAnimal extends Animal {

    constructor(name, age, latinName, numberOfLegs, type, favoriteFood, currentPlace) {

        super(name, age, latinName, numberOfLegs);

        this.type = type;
        this.favoriteFood = favoriteFood;
        this.currentPlace = currentPlace;
    }
    flyOut(place) {
        this.currentPlace = place
    }
};




class TerrestrialAnimal extends Animal {
    constructor(name, age, latinName, numberOfLegs, type, typeOfFur) {


        super(name, age, latinName, numberOfLegs);

        this.type = type;
        this.hasFur = true;
        this.typeOfFur = typeOfFur;
    }
    set typeOfFur(userTypeOfFur) {
        this._typeOfFur = userTypeOfFur
    }
    get typeOfFur() {
        return this._typeOfFur
    }
    sound(sound) {
        if (this.type === "Fox") {

            console.log(`What does the ${this.type} say?: ${sound}`)
        } else {
            console.log(`The ${this.type} goes: , ${sound}`)
        }
    }
};

class WildAnimal extends TerrestrialAnimal {
    constructor(name, age, latinName, numberOfLegs, type, typeOfFur, typeOfFood, favoriteFood) {
        super(name, age, latinName, numberOfLegs, type, typeOfFur);

        this.typeOfFood = typeOfFood;
        this.favoriteFood = favoriteFood;
    }
    set typeOfFood(userTypeOfFood) {
        this._typeOfFood = userTypeOfFood
    }
    get typeOfFood() {
        return this._typeOfFood
    }
};

class DomesticAnimal extends TerrestrialAnimal {

    constructor(name, age, latinName, numberOfLegs, type, typeOfFur, favoriteFood, hasOwner, ownerName, price) {
        super(name, age, latinName, numberOfLegs, type, typeOfFur)

        this.name = name
        this.favoriteFood = favoriteFood
        this.hasOwner = hasOwner
        this.ownerName = ownerName
        this.price = price

    }
    static ownerPrice(animal) {
        if (animal.hasOwner) {
            animal.price += 1000;
            console.log(`The Animal has owner and it costs ${animal.price} $`);
        } else {
            console.log("The Animal does not have an owner, would you like to have it?");
        }
    }
};



//Aquatic Animals

let shark = new AquaticAnimal("Sharky", 5, "Selachimorpha", 0, "fish", true);
shark.changeLifeEnvironment("fresh");
shark.printAnimal();
console.log(shark);

let dolphin = new AquaticAnimal("SnowFlake", 3, "Delphinus", 0, "mammal", true);
dolphin.changeLifeEnvironment("fresh");
dolphin.printAnimal();
console.log(dolphin);

//Flying Animals 

let hawk = new FlyingAnimal("Atlanta", 21, "Buteo jamaicensis", 2, "Red Tailed Hawk", "mice", "desert");
hawk.flyOut("Mountain");
hawk.printAnimal();
console.log(hawk);

let eagle = new FlyingAnimal("Baldy", 7, "Haliaeetus leucocephalus", 2, "Bald Eagle", "Fish", "Canada");
eagle.flyOut("Alaska");
eagle.printAnimal();
console.log(eagle);


//Wild Animals

let wolf = new WildAnimal("Adolfo", 5, "Canis lupus", 4, "Wolf", "soft undercoat and coarser outer coat", "meat", "sheep");
wolf.printAnimal();
wolf.sound("Auuuuuuuuuuuuu!");
console.log(wolf);

let fox = new WildAnimal("Ms.Fox", 2, "Vulpes", 4, "Fox", "long-haired thick and dense fur", "meat", "hares and mice");
fox.printAnimal();
fox.sound("Ring-ding-ding-ding-dingeringeding!");
console.log(fox);


//Domestic Animals

let cat = new DomesticAnimal("Garfield", 4, "Felis catus", 4, "Cat", "Tabby Cat", "lasagna", true, "Jon Arbuckle", 800);
cat.printAnimal();
cat.sound("I hate Mondays.");
console.log(cat);

let dog = new DomesticAnimal("Django", 5, "Canis lupus familiaris", 4, "Dog", "double coat", "lasagna", true, "Darko", +Infinity);
dog.printAnimal();
dog.sound("Does this count as annoying? Bark! Bark!... + infinity");
console.log(dog);
DomesticAnimal.ownerPrice(dog)
DomesticAnimal.ownerPrice(cat)