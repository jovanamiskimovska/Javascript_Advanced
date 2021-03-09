class Person {
    constructor(firstName, lastName, age, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    get firstName() {
        console.log("Getting the first name...");
        return this._firstName;
    }
    get lastName() {
        console.log("Getting the last name...");
        return this._lastName;
    }
    get age() {
        console.log("Getting the age...");
        return this._age;
    }
    get address() {
        console.log("Getting the address...");
        return this._address;
    }
    set firstName(fName) {
        console.log("Setting the first name...");
        if (typeof fName === "string" && fName.length > 1) {
            this._firstName = fName;
            return;
        }
        else {
            throw new Error("The first name parameter should be a string with more than 1 character!")
        }
    }
    set lastName(lName) {
        console.log("Setting the last name...");
        if (typeof lName === "string" && lName.length > 1) {
            this._lastName = lName;
            return;
        }
        else {
            throw new Error("The last name parameter should be a string with more than 1 character!")
        }
    }
    set age(ageNumb) {
        console.log("Setting the age...");
        if (typeof ageNumb === "number") {
            this._age = ageNumb;
            return;
        }
        else {
            throw new Error("The age parameter should be a number");
        }
    }
    set address(addr) {
        console.log("Setting the address...");
        if (typeof addr === "string" && addr.length > 1) {
            this._address = addr;
            return;
        }
        else {
            throw new Error("The address parameter should be a string with more than 1 character!")
        }
    }
}

class Students extends Person {
    constructor(firstName, lastName, age, address, subjects, academy) {
        super(firstName, lastName, age, address);
        this.subjects = subjects === undefined ? [] : subjects;
        this.academy = academy === undefined ? "no academy" : academy;
    }
    static checkStudent(student, subject) {
        if (student instanceof Students && typeof subject === "string" && subject.length > 1) {
            let searchSubject = student.subjects.filter(sub => (sub.toLowerCase() === subject.toLowerCase()))
            if (searchSubject.length > 0) {
                console.log(`The student ${student.fullName()} listens the subject ${subject}`);
            }
            else {
                console.log(`The student ${student.fullName()} doesn't listen the subject ${subject}`);
            }
        }
        else {
            throw new Error("Invalid student instance or subject!");
        }
    }
}

let studentArray = [new Students("Tom", "Parker", 25, "Skopje", ["HTML", "CSS", "JS", "JS ADVANCED"], "SEDC"), new Students("Ana", "Lee", 27, "Skopje", ["C#", ".NET"], "Seavus"), new Students("Hunter", "Gray", 23, "Skopje", ["Art", "History", "Math", "IT"], "Sedc")];

console.log(studentArray[0].fullName());
Students.checkStudent(studentArray[2], "CSS");
Students.checkStudent(studentArray[0], "CSS");
Students.checkStudent(studentArray[0], ".Net");