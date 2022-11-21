//Node packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

//Team profiles/class
const intern = require("./lib/Interns");
const manager = require("./lib/Managers");
const engineer = require("./lib/Engineers");

//Link to page creation
const generateHTML = require("./src/generateHTML");

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
      confirm: nameInput => {
        if (name!="") {
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
      validate: nameInput => {
        if (nameInput!=" ") {
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
      confirm: nameInput => {
        if (nameInput) {
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
}; 

//Application prompts for adding additional team members
const addEmployee = ()=>{
    return inquirer.prompt ([
    {
      type: 'list',
      name: 'role',
      message: "What is the team member's role?",
      choices:['Engineer', 'Intern'],
    },
    {
      type: 'input',
      name: 'name',
      message: "What is the team member's name?",
      confirm: input => {
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
      confirm: nameInput => {
        if (name.value!="") {
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
      confirm: nameInput => {
        if (nameInput) {
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
      confirm: nameInput => {
        if (nameInput) {
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
      confirm: data => {
        if (data!="") {
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
    console.log(employee); 
    
    if (confirmAddEmployee) {
      return addEmployee(); 
    } else {
      return team;
    }
  })
}

const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
      if (err) {
          console.log(err);
          return;
      } else {
          console.log("Your team profile has been successfully created!")
      }
  })
}; 

//Promise to dictate order of events for data input
addManager()
  .then(addEmployee)
  .then(team =>{
    return generateHTML(team);
  })
  .then(page =>{
    return writeFile(page);
  })
  .catch(err => {
    console.log(err);
  })
