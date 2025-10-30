class Employee{
        constructor(){
            this.BaseFullTimeSalary = 5000000;
            this.BasePartTimeSalary = 50000;
        }
    calculateSalary(){
    }
}

class FullTimeEmployee extends Employee {
    calculateSalary(){
        return console.log(`Gaji tetap adalah ${this.BaseFullTimeSalary}`);
    }
}

class PartTimeEmployee extends Employee {
    calculateSalary(workingHours){
        let totalSalary = workingHours * this.BasePartTimeSalary;
        return console.log(`${this.BasePartTimeSalary} x ${workingHours} = ${totalSalary}`);
    }
}

const FullTimeSalary = new FullTimeEmployee();
FullTimeSalary.calculateSalary();

const partTimeSalary = new PartTimeEmployee();
partTimeSalary.calculateSalary(3);



