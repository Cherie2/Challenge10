//Imports parent class
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school){
       
        //Pulls from employee constructor
        super(name,id,email);

        school = this.school;
    }
    //Returns school name from input
    getSchool(){
        return school;
    }
    //Overwrites employye to intern
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;