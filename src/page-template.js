const generateNewMember = function(member) {
    console.log(member);
    // if else statements to create card for correct team member
    if (member.role === "Manager") {
        roleAddOn = `Office Number: ${member.officeNumber}`
    }
    else if (member.role === "Engineer") {
        roleAddOn = `Github: <a href = https://github.com/${member.github}>${member.github}</a>`
    }
    else if (member.role === "Intern") {
        roleAddOn = `School: ${member.school}`
    }

    return `
    <div class="col-4 mb-5">
                <div class="card shadow-lg" style="width: 18rem;">
                    <div class="card-header text-white bg-primary">
                        <h3 class="card-title">${member.name}</h3>
                        <h5>${member.role}</h5>
                    </div>
                    <div class="card-body">
                        <div class="card">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${member.id}</li>
                                <li class="list-group-item">Email:
                                <a href = "mailto: ${member.email}">${member.email}</a>
                                </li>
                                <li class="list-group-item">${roleAddOn}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            `
}

const generatePage = function(team) {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Document</title>
</head>
<div class="jumbotron jumbotron-fluid bg-danger ">
    <div class="container">
        <h1 class="display-5 text-center text-white">My Team</h1>
    </div>
</div>

<body>
    <div class="container">
        <div class="row">
            ${team}
        </div>
    </div>

</body>

</html>
    `;
};

module.exports = { generatePage, generateNewMember }