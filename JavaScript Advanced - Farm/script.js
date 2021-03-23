class Farm {
    constructor(name, crops = [], animals = [], vehicles = [], initialBudget = 10000000) {
        this.name = name
        this.initialBudget = initialBudget
        this.crops = crops
        this.vehicles = vehicles
        this.animals = animals
    }
    addCrop(array) {
        array.forEach(crop => {
            this.crops.push(crop)
        });
    }
    addAnimal(array) {
        array.forEach(animal => {
            this.animals.push(animal)
        });

    }
    addVehicles(array) {
        array.forEach(vehicle => {
            this.vehicles.push(vehicle)
        });

    }
    calculateIncome() {
        const cropIncome = this.crops
            .map(crop => crop.getYieldInEuros())
            .reduce((a, b) => a + b, 0)

        const animalIncome = this.animals
            .map(animal => animal.getValueInEuros())
            .reduce((a, b) => a + b, 0)
        return Math.round(cropIncome + animalIncome)
    }
    calculateNumberOfVehicles() {
        return this.vehicles.length
    }
    sumOfallAnimals() {
        return this.animals.length
    }
    printFarm() {
        console.log(`----------------\n- Farm: ${this.name}  -\n- No.  of crops: ${this.crops.length}  -\n- No.  of animals ${this.animals.length} -\n- No.  of vehicles ${this.vehicles.length} -\n- Initial budget: ${this.initialBudget} denars -\n- Total income: ${this.calculateIncome()} denars-\n----------------`)
    }
}

class Human {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.isOwner = true
    }

}
class Worker extends Human {
    constructor(name, gender, age, workingPosition, salary) {
        super(name, gender, age)
        this.isWorker = true;
        this.workingPosition = workingPosition
        this.salary = salary;
        this.works = true;
    }
}


class Animal {
    constructor(age, weight, pricePerKg) {
        this.age = age
        this.weight = weight
        this.price = pricePerKg
    }
    getValueInEuros() {
        return this.price * this.weight
    }
}


class Bird extends Animal {
    constructor(age, weight, pricePerKg, eggsPerDay, ) {

        super(age, weight, pricePerKg)
        this.weight = weight;
        this.age = age;
        this.weight = weight
        this.price = pricePerKg
        this.wings = true;
        this.laysEggs = true;
        this.hasFeathers = true;
        this.eggsPerDay = eggsPerDay
    }
    calculateEggIncome(numberOfDays, pricePerEgg) {
        return (this.eggsPerDay * numberOfDays) * pricePerEgg
    }

}
class Chicken extends Bird {
    constructor(age, weight, pricePerKg, eggsPerDay, gender = "hen") {

        super(age, weight, pricePerKg, eggsPerDay);
        this.age = age;
        this.weight = weight;
        this.price = pricePerKg;
        this.gender = gender;
    }
}

class Turkey extends Bird {
    constructor(age, weight, pricePerKg, eggsPerDay, gender) {

        super(age, weight, pricePerKg, eggsPerDay);
        this.age = age;
        this.weight = weight;
        this.price = pricePerKg;
        this.gender = gender;
    }
}

class Duck extends Bird {
    constructor(age, weight, pricePerKg, eggsPerDay, gender) {

        super(age, weight, pricePerKg, eggsPerDay);
        this.age = age;
        this.weight = weight;
        this.price = pricePerKg;
        this.gender = gender;
    }
}

class Pig extends Animal {
    constructor(age, weight, pricePerKg) {

        super(age, weight, pricePerKg)
        this.price = 300
    }
    getWeight() {
        if (this.age * 2.3 > Math.round(this.weight)) { return }
        return this.age * 2.3
    }
}

class Cow extends Animal {
    constructor(age, weight, pricePerKg) {
        super(age, weight, pricePerKg)
        this.price = 300
    }
    getWeight() {
        if (this.age * 1.5 > Math.ceil(1200)) { return 1200 }
        return this.age * 1.5
    }
}

class Horse extends Animal {
    constructor(age, weight, pricePerKg) {
        super(age, weight, pricePerKg)
        this.price = 600
    }
    getWeight() {
        if (this.age * 1.7 > Math.ceil(1000)) { return 100 }
        return this.age * 1.7
    }
}
class Crop {
    constructor(acres) {
        this.acres = acres;
    }
    getYieldInEuros() {
        return this.price * this.getYieldInKg();
    }
    getCosts() {
        return this.costs * this.acres;
    }
};

class Wheat extends Crop {
    constructor(acres) {
        super(acres),
            this.price = 90
        this.costs = 340
    }
    getYieldInKg() {
        return Math.pow(this.acres * 90, 1.3)
    }
};

class Corn extends Crop {
    constructor(acres) {
        super(acres),
            this.price = 60
        this.costs = 166
    }
    getYieldInKg() {
        return Math.pow(this.acres * 150, 1.1)
    }
};

class Vehicle {

    constructor(numberOfWheels, typeOfFuel, color, typeOfVehicle, inService, registration, isBroken = false, isPrivate = false) {

        this.numberOfWheels = numberOfWheels;
        this.typeOfFuel = typeOfFuel;
        this.color = color;
        this.typeOfVehicle = typeOfVehicle;
        this.registration = registration;
        this.inService = inService;
        this.isBroken = isBroken;
        this.isPrivate = isPrivate;
    }
    fixVehicle(fixingPrice) {
        if (this.isBroken) {
            this.isBroken = false
            return farm.initialBudget - fixingPrice
        }

    }
}


let cow = new Cow(13, 1200, 300);
let pig = new Pig(13, 700, 300);
let horse = new Horse(13, 1000, 200);
let chicken = new Chicken(3, 10, 120, 1, "hen");
let turkey = new Turkey(5, 15, 240, 2, "female");
let duck = new Duck(2, 9, 300, 0, "male");

let tractor = new Vehicle(4, "diesel", "red", "tractor", true, "10.05.2021", true, false);
let combineHarvester = new Vehicle(4, "diesel", "red", "Combine Harvester", true, "10.03.2021", false, false);
let car = new Vehicle(4, "petrol", "red", "car", true, "20.10.2021", false, true);

let corn = new Corn(200);
let wheat = new Wheat(150);


let animalArray = [cow, pig, horse, chicken, turkey, duck];
let cropsArray = [corn, wheat];
let vehicleArray = [tractor, combineHarvester, car];

let farm = new Farm("Farmata Na SEDC")

farm.addAnimal(animalArray);
farm.addCrop(cropsArray);
farm.addVehicles(vehicleArray);


farm.printFarm();
console.log(farm);

console.log(`Total number of animals on the farm ${farm.sumOfallAnimals()}`)
console.log(`Farms budget after fixing the vehicle is: ${tractor.fixVehicle(5000)} denars`)