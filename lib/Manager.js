//Imports parent class
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        //Pulls from employee constructor
        super(name, id, email);

        officeNumber = this.officeNumber;
    }
    //returns office number from input
    getOfficeNumber(){
        return officeNumber;
    }
    //Overwrites employee with manager
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;