//Imports parent class
const employee = require("./employee");

class manager extends employee {
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

module.exports = manager;