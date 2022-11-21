//Function to join cards together and form html page
const generateHTML = function (data){
//Create function for manager card
const generateManager = function (Manager) {
    return `
    <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>`
    
}
//Create function for engineer card
const generateEngineer = function (Engineer){
    return
    // name 
    // id 
    // email
    // GitHub
}
//Create function for intern card
const generateIntern = function (Intern){
    return
    // name 
    // id
    // email
    // school
}
   const page = [];



    return page.join('')
   
}


module.exports = (team)=>{
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!--Import bootstrap.css-->
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.csss"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profiles</title>
</head>
<body>
    <div class="row row-cols-1 row-cols-md-3 g-4">
       ${generateHTML(team)}
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</body>
</html>
    `
}