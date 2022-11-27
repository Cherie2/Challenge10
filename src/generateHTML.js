//Function to create employee cards and join together on page
const generateHTML = function (employee){

    //Create function for manager card template
    const generateManager = function (Manager) {
        return `
        <div class="col">
                <div class="card h-100">
                    <div class="head">
                    <h1>${Manager.name}</h1>
                    <h2>Manager<span class="material-icons">coffee</span></h2>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${Manager.id}</li>
                            <li class="list-group-item">Email: <a href="mailto: ${Manager.email}">${Manager.email}</a></li>
                            <li class="list-group-item">Office Number: <br>${Manager.officeNumber}</li>
                        </ul>
                    </div>
                </div>
        </div>`
    }
    //Create function for engineer card template
    const generateEngineer = function (Engineer){
        return `
            <div class="col">
                <div class="card h-100">
                    <div class="head">
                    <h1>${Engineer.name}</h1>
                    <h2>Engineer<span class="material-icons">engineering</span></h2>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${Engineer.id}</li>
                            <li class="list-group-item">Email: <a href="mailto: ${Engineer.email}">${Engineer.email}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${Engineer.gitHub}" target="_blank">${Engineer.gitHub}</a></li>
                        </ul>
                    </div>
                </div>
            </div>`
    }
    
    //Create function for intern card template
    const generateIntern = function (Intern){
        return `
            <div class="col">
                <div class="card h-100">
                    <div class="head">
                    <h1>${Intern.name}</h1>
                    <h2>Intern<span class="material-icons">school</span></h2>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item link-secondary">ID: ${Intern.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${Intern.email}">${Intern.email}</a></li>
                            <li class="list-group-item">School: ${Intern.school}</li>
                        </ul>
                    </div>
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
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Teko&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css"/>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
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
</html>`
}
