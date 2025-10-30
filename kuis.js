class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    calculateBonus(){
    }
}

class FullTimeEmployee extends Employee {
    calculateBonus() {
        let employeeBonus = this.salary * 0.10;
        console.log(`Bonus dari ${this.name} adalah ${this.salary} x 10% = ${employeeBonus}`);
        return employeeBonus;
    }
}

class PartTimeEmployee extends Employee {
    calculateBonus() {
        let employeeBonus = this.salary * 0.05;
        console.log(`Bonus dari  ${this.name} adalah ${this.salary} x 5% = ${employeeBonus}`);
        return employeeBonus;
    }
}

let FullTimeSalary = new FullTimeEmployee("Budi",8000000);
let PartTimeSalary = new PartTimeEmployee("Sita",6000000);

let totalBonus = FullTimeSalary.calculateBonus() + PartTimeSalary.calculateBonus();
return console.log(`Total bonus dari gaji tetap dan gaji part time adalah ${totalBonus}`);
