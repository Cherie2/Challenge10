

//Node packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

//Team profiles/class
const intern = require("./lib/intern");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");

//Empty array for team members
const team = [];

//Application Prompts for adding Manager
const addManager = () => {
    return inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the Manager?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is the id number of the manager?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is the email of the manager?',
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is the office number of the manager?',
    },
   ])
   .then(managerData => {
    const  { name, id, email, officeNumber } = managerData; 
    const manager = new Manager (name, id, email, officeNumber);

    team.push(manager); 
    console.log(manager); 
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
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the team member's id?",
    },  
    {
      type: 'input',
      name: 'email',
      message: "What the team member's email?",
    },
    {
      type: 'input',
      name: 'GitHub',
      message: "What is the team member's GitHub Username?",
      when: (data) => data.role === "Engineer",
    },
    {
      type: 'input',
      name: 'school',
      message: "What is the team member's school name?",
      when: (data) => data.role === "Intern",
      },
    
])
.then(employeeData => {
    const  { name, id, email, school, GitHub } = employeeData; 
    let employee;

    if(role === "Intern"){
        employee = new Intern(name, id, email, school);
    }

    if(role === "Engineer"){
        employee = new Engineer(name, id, email, GitHub);
    }

    team.push(employee); 
    console.log(employee); 
})
}