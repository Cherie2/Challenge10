//Import parent class
const Employee = require("./Employee");

//Engineer class
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        //Pulling from employee constructor
        super(name, id, email)

        this.gitHub = gitHub;
    }
    //returns GitHub username from input
    getGitHub() {
        return this.gitHub;
    }
    //Employee is overwritten to engineer
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;