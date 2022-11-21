//Parent Class 
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }
    //Return name from input
    getName () {
        return name;
    }
     //Return id from input
    getId () {
        return id;
    }
     //Return email from input
    getEmail () {
        return email;
    }
     //Return type of employee
    getRole () {
        return "Employee";
    }
}

module.exports = Employee;
