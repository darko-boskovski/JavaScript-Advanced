function Animal(name, age, latinName, numberOfLegs) {
    this.name = name;
    this.age = age;
    this.latinName = latinName;
    this.numberOfLegs = numberOfLegs;

    this.printAnimal = function() {
        console.log(`${this.name}'s latin name is: ${this.latinName}, it is ${this.age} old, and has ${this.numberOfLegs} legs`);
    }
}


function AquaticAnimal(name, age, latinName, numberOfLegs, type) {

    Object.setPrototypeOf(this, new Animal(name, age, latinName, numberOfLegs))

    this.type = type
    this.liveInSaltWater = undefined
    this.liveInFreshWater = undefined

    this.changeLifeEnvironment = function(typeOfWater) {
        if (typeOfWater === "salt") {
            this.liveInSaltWater = true;
            this.liveInFreshWater = false;
        } else if (typeOfWater === "fresh") {
            this.liveInFreshWater = true;
            this.liveInSaltWater = false;
        } else {
            console.log("There is no such AquaticAnimal")
        }
    }
}

function FlyingAnimal(name, age, latinName, numberOfLegs, type, favoriteFood, currentPlace) {

    Object.setPrototypeOf(this, new Animal(name, age, latinName, numberOfLegs))

    this.type = type
    this.favoriteFood = favoriteFood
    this.currentPlace = currentPlace
    this.flyOut = function(place) {
        this.currentPlace = place
    }
}

function TerrestrialAnimal(name, age, latinName, numberOfLegs, type, typeOfFur) {

    Object.setPrototypeOf(this, new Animal(name, age, latinName, numberOfLegs))
    this.type = type
    this.hasFur = true;
    this.typeOfFur = typeOfFur
    this.sound = function(sound) {
        console.log(`The ${type} goes:", ${sound}`)
    }
}

function WildAnimal(name, age, latinName, numberOfLegs, type, typeOfFur, typeOfFood, favoriteFood) {

    Object.setPrototypeOf(this, new TerrestrialAnimal(name, age, latinName, numberOfLegs, type, typeOfFur))

    this.typeOfFood = typeOfFood
    this.favoriteFood = favoriteFood

}

function DomesticAnimal(name, age, latinName, numberOfLegs, type, typeOfFur, favoriteFood, ownerName) {

    Object.setPrototypeOf(this, new TerrestrialAnimal(name, age, latinName, numberOfLegs, type, typeOfFur))

    this.name = name
    this.favoriteFood = favoriteFood
    this.ownerName = ownerName

}

//Aquatic Animals

let shark = new AquaticAnimal("Sharky", 5, "Selachimorpha", 0, "fish");
shark.changeLifeEnvironment("salt");
shark.printAnimal()
console.log(shark);

let dolphin = new AquaticAnimal("SnowFlake", 3, "Delphinus", 0, "mammal");
dolphin.changeLifeEnvironment("salt");
dolphin.printAnimal()
console.log(dolphin);

//Flying Animals 

let hawk = new FlyingAnimal("Atlanta", 21, "Buteo jamaicensis", 2, "Red Tailed Hawk", "mice", "desert");
hawk.flyOut("Mountain");
hawk.printAnimal()
console.log(hawk)

let eagle = new FlyingAnimal("Baldy", 7, "Haliaeetus leucocephalus", 2, "Bald Eagle", "Fish", "Canada");
eagle.flyOut("Alaska");
eagle.printAnimal()
console.log(eagle)


//Wild Animals

let wolf = new WildAnimal("Adolfo", 5, "Canis lupus", 4, "Wolf", "soft undercoat and coarser outer coat", "meat", "sheep");
wolf.printAnimal()
wolf.sound("Auuuuuuuuuuuuu!")
console.log(wolf)

let fox = new WildAnimal("Ms.Fox", 2, "Vulpes", 4, "Fox", "long-haired thick and dense fur", "meat", "hares and mice");
fox.printAnimal()
fox.sound("Ring-ding-ding-ding-dingeringeding!")
console.log(fox)


//Domestic Animals

let cat = new DomesticAnimal("Garfield", 4, "Felis catus", 4, "Cat", "Tabby Cat", "lasagna", "Jon Arbuckle");
cat.printAnimal()
cat.sound("I hate Mondays.")
console.log(cat)

let dog = new DomesticAnimal("Django", 5, "Canis lupus familiaris", 4, "Dog", "double coat", "lasagna", "Darko");
dog.printAnimal()
dog.sound("Does this count as annoying? Bark! Bark!... + infinity")
console.log(dog)