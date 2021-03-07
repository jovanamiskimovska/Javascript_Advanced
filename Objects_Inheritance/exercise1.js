function Person(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.getFullName = function () {
        console.log(`The person's full name is: ${this.firstName} ${this.lastName}`);
    }
}

function Animal(name, age) {
    this.name = name;
    this.age = age;
    this.eat = function () {
        console.log(`NOM NOM - ${this.name} is eating`);
    }
    this.sleep = function () {
        console.log(`Do not disturb, ${this.name} is sleeping`);
    }
}

function Cat(name, age, color, ownerId) {
    Object.setPrototypeOf(this, new Animal(name, age));
    this.color = color;
    this.ownerId = ownerId === undefined ? null : ownerId;
    this.meow = function () {
        console.log(`The cat ${this.name} says Meow`);
    }
    this.ownerDetails = function (peopleArray) {
        if (this.ownerId === null) {
            console.log(`The cat ${this.name} does not have an owner!`);
            return;
        }
        if (this.ownerId !== null && typeof this.ownerId === "number") {
            for (let person of peopleArray) {
                if (person.id === this.ownerId) {
                    return person.getFullName();
                }
            }
        }
    }
}


function PersianCat(name, age, color, ownerId, eyeColor) {
    Object.setPrototypeOf(this, new Cat(name, age, color, ownerId));
    this.eyeColor = eyeColor;
    this.furDescription = function () {
        console.log(`The cat ${this.name} has full fur!`);
    }
}

function RagDollCat(name, age, color, ownerId, weight, isFriendly) {
    Object.setPrototypeOf(this, new Cat(name, age, color, ownerId));
    this.weight = weight;
    this.isFriendly = isFriendly;
    this.printPersonality = function (response) {
        if (response === true) {
            console.log(`The cat ${this.name} is a friendly cat!`);
            this.isFriendly = true;
            return;
        }
        if (response === false) {
            console.log(`The cat ${this.name} isn't a friendly cat!`);
            this.isFriendly = false;
            return;
        }
    }
}


let fivePeople = [new Person(1, "Jay", "Stones", 25), new Person(2, "Kaya", "Heels", 5), new Person(3, "Todd", "Brown", 27), new Person(4, "Jane", "Jones", 21), new Person(5, "Maya", "Fernandes", 32)];

let fiveColors = ["white", "yellow", "black", "brown", "grey"];

let persianCat = new PersianCat("Persie", 5, fiveColors[Math.floor(Math.random() * fiveColors.length)], 3, fiveColors[Math.floor(Math.random() * fiveColors.length)]);

let ragDollCat = new RagDollCat("Doll", 7, fiveColors[Math.floor(Math.random() * fiveColors.length)], 3, 3, true);

fivePeople[0].getFullName();
persianCat.eat();
persianCat.sleep();
ragDollCat.meow();
ragDollCat.ownerDetails(fivePeople);
persianCat.furDescription();
ragDollCat.printPersonality(false);

console.log(ragDollCat);
console.log(persianCat);


//let cat1=new Cat("White",3,"white",1);
//let cat2=new Cat("Mac",5,yellow,5);