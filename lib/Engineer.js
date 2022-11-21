//Import parent class
const Employee = require("./Employee"); 

//Engineer class
class Engineer extends Employee {
    constructor(name, id, email, GitHub){
        //Pulling from employee constructor
        super(name ,id, email)
        
        GitHub = this.GitHub;
    }
    //returns GitHub username from input
    getGitHub(){
        return GitHub;
    }
    //Employee is overwritten to engineer
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;