//const Employee = require("../lib/Employee")

//Function to create employee cards and join together on page
const generateHTML = function (employee){

    //Create function for manager card template
    const generateManager = function (Manager) {
        return `
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <h1 class="manager">${Manager.name}</h1>
        <div class="card-body">
          <h2 class="card-text">Manager<h2>
          <p class="card-text">${Manager.id}</p>
          <p class="card-text">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></p>
          <p class="card-text">Office Number: ${Manager.officeNumber}</p>
        </div>
      </div>`
    
}
    //Create function for engineer card template
    const generateEngineer = function (Engineer){
        return `
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <h1><span class="badge text-bg-secondary">${Engineer.name}</span></h1>
            <div class="card-body">
                <h2 class="card-text">Engineer<h2>
                <p class="card-text">ID: ${Engineer.id}</p>
                <p class="card-content">Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></p>
                <p class="card-text">GitHub: <a href="https://github.com/${Engineer.gitHub}">${Engineer.gitHub}</a></p>
            </div>
        </div>`
    }
    
    //Create function for intern card template
    const generateIntern = function (Intern){
        return `
            <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <h1 class="manager">${Intern.name}</h1>
                <div class="card-body">
                    <h2 class="card-text">Intern<h2>
                    <p class="card-text">ID: ${Intern.id}</p>
                    <p class="email">Email: <a href="mailto:${Intern.email}">${Intern.email}</a></p>
                    <p class="card-text">School: ${Intern.school}</p>
                </div>
            </div>`
    }
    
    //Empty array for employee cards to be added to
    const page = []; 
    
    for (let i = 0; i < employee.length; i++) {
        const teamMember = employee[i];
        const role = teamMember.getRole(); 

        if(role === "Manager"){
            
            const managerCard = generateManager(teamMember);
            page.push(managerCard);
        }
        if(role === "Engineer"){
            
            const engineerCard = generateEngineer(teamMember);
            page.push(engineerCard);
        }
        if(role === "Intern"){
            
            const internCard = generateIntern(teamMember);
            page.push(internCard);
        }
    }

   return page.join('');  


}
module.exports = (team)=>{
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!--Import bootstrap.css-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Member Profiles</title>
</head>
    <header>Team Members</header>
<body>
    <main class="container">
    <div class="row row-cols-1 row-cols-md-3 g-4">
       ${generateHTML(team)}
    </div>
    </main>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-IDwe1+LCz02ROU9k972gdyvl+AESN10+x7tBKgc9I5HFtuNz0wWnPclzo6p9vxnk" crossorigin="anonymous"></script>
</body>
</html>
    `
}
