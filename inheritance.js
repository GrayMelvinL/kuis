class Person {
    name;

    constructor(name) {
    this.name = name;
    }
    introduceSelf() {
        console.log(`Hi! I'm ${this.name}`);

    }
}
class Professor extends Person {
    teaches;
    constructor(name, teaches) {
        super(name);
        this.teaches = teaches;
    }
    introduceSelf() {
        console.log(`My name is ${this.name}, and i will be your ${this.teaches} Professor.`);
    }
    grade(paper) {
        const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(grade);
    }
}
const ren = new Professor('ren', 'matematika');
ren.introduceSelf();
ren.grade('my paper');