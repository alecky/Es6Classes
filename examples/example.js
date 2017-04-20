   function Person(first, last) {
        this.firstName = first;
        this.lastName = last;
    }

    Person.prototype.fullName = function fullName() {
        return this.firstPlusLast(this.firstName, this.lastName);
    };

    Person.prototype.firstPlusLast = function (first, last) {
        return `${first}, ${last}`;
    };


var aPerson = new Person('John', 'Citizen');


    function Employee(first, last, empNum) {
        Person.call(this, first, last);
        this.employeeNumber = empNum;
    }

    Employee.prototype = Object.create(Person.prototype);

    Employee.firstPlusLast = Person.firstPlusLast;
    
    Employee.prototype.employeeDetails = function employeeDetails(first, last) {
        return `${this.fullName()}: ${this.employeeNumber}`;
    };

var anEmployee = new Employee('John', 'Citizen', '123');


