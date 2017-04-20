    class Person {
        constructor(first, last) {
            this.firstName = first;
            this.lastName = last;
        }

        fullName() {
             return this.firstPlusLast(this.firstName, this.lastName);
        }

        firstPlusLast(first, last) {
            return `${first}, ${last}`;
        } 
    }

var aPerson = new Person('John', 'Citizen');


    class Employee extends Person {
        constructor(first, last, empNum) {
            super(first, last);
            this.employeeNumber = empNum;
        }

        employeeDetails() {
             return `${this.fullName()}: ${this.employeeNumber}`;
        }
    }

var anEmployee = new Employee('John', 'Citizen', '123');