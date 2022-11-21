//Import parent class
const employee = require("./employee"); 

//Engineer class
class engineer extends employee {
    constructor(name, id, email, GitHub){
        //Pulling from employee constructor
        super(name ,id, email)
        
        GitHub = this.GitGub;
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

module.exports = engineer;