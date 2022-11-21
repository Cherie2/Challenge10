//Node packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

//Team profiles/class
const intern = require("./lib/Intern");
const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");

//Link to page creation
const renderHtml = require("./src/generateHTML");

//Empty array for team members
const team = [];

//Application Prompts for adding Manager
const addManager = () => {
    return inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the Manager?',
      validate: input => {
        if (input!="") {
          return true;
        } else {
          console.log("Please enter Manager's name!");
          return false;
        } 
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the id number of the manager?',
      validate: input => {
        if (input!="") {
          return true;
        } else {
          console.log("Please enter Manager's ID!");
          return false;
        } 
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the email of the manager?',
      validate: input => {
        if (input!="") {
          return true;
        } else {
          console.log("Please enter Manager's email!");
          return false;
        } 
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the office number of the manager?',
      validate: input => {
        if (input!="") {
          return true;
        } else {
          console.log("Please enter Manager's office number!");
          return false;
        } 
      }
    },
   ])
   .then(managerData => {
    const  { name, id, email, officeNumber } = managerData; 
    const Manager = new manager(name, id, email, officeNumber);

    team.push(Manager); 
    console.log(Manager); 
    })
    .then(()=> addEmployee())
}; 

//Application prompts for adding additional team members
const addEmployee = ()=>{
    return inquirer.prompt ([
    {
      type: 'list',
      name: 'role',
      message: "What is the team member's role?",
      choices:['Engineer', 'Intern', 'No Additiional Team Members'],
    },
    {
      type: 'input',
      name: 'name',
      message: "What is the team member's name?",
      validate: input => {
        if (input!="") {
          return true;
        } else {
          console.log("Please enter team member's name!");
          return false;
        } 
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the team member's ID?",
      validate: input => {
        if (input!="") {
          return true;
        } else {
          console.log("Please enter team member's ID!");
          return false;
        } 
      }
    },  
    {
      type: 'input',
      name: 'email',
      message: "What is the team member's email?",
      validate: input => {
        if (input!="") {
          return true;
        } else {
          console.log("Please enter team member's email!");
          return false;
        } 
      }
    },
    {
      type: 'input',
      name: 'GitHub',
      message: "What is the team member's GitHub Username?",
      when: (data) => data.role === "Engineer",
      validate: input => {
        if (input!="") {
          return true;
        } else {
          console.log("Please enter team member's GitHub username!");
          return false;
        } 
      }
    },
    {
      type: 'input',
      name: 'school',
      message: "What is the team member's school name?",
      when: (data) => data.role === "Intern",
      validate: input => {
        if (input!="") {
          return true;
        } else {
          console.log("Please enter team member's school name!");
          return false;
        } 
      }
    },
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to add more team members?',
    }
    ])
  .then(employeeData => {
    const  { name, id, email, school, GitHub, confirmAddEmployee } = employeeData; 
    let employee;

    if(employeeData.role === "Intern"){
        employee = new intern(name, id, email, school);
    }else if(employeeData.role === "Engineer"){
        employee = new engineer(name, id, email, GitHub);
    }
    
    team.push(employee);  
    
    if (confirmAddEmployee) {
      return addEmployee(); 
    } else {
      return team;
    }
  })
}

const writeFile = () => {
  fs.writeFile('./dist/index.html',  renderHtml(team), err => {
      if (err) {
          console.log("Unable to create team profile",err);
          return;
      } else {
          console.log("Your team profile has been successfully created!")
      }
  })
}

  addManager();
