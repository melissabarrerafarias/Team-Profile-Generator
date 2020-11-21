const inquirer = require('inquirer');
const fs = require('fs');
const { generatePage, generateNewMember } = require('./src/page-template');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// team members
let teamMembers = [];
let team = ``;

const teamHTML = function() {
    for (let i = 0; i < teamMembers.length; i++) {
       team = team + generateNewMember(teamMembers[i]);
    }

    let htmlGenerated = generatePage(team)

    // write file with fsWriteFile 
    fs.writeFile('./dist/index.html', htmlGenerated, err => {
        if (err) throw err;
        console.log("Your team was built!");
    });
};

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is team Manager's name?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter the team manager's name")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the Manager's employee ID:",
            validate: idInput => {
                if (idInput) {
                    return true;
                }
                else {
                    console.log("Please enter the team manager's employee ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the Manager's email address:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log("Please enter the team manager's email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the Manager's office number:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log("Please enter the team manager's office number");
                    return false;
                }
            }
        }
    ])
    .then((response) => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        teamMembers.push(manager);
    })
}

// user selects wether or not they want to add a team member or finish team
const addMember = () => {

console.log(`
=========================
Add Team Member or Finish
=========================
`);

    return inquirer.prompt([
        {
            type: "list",
            name: "members",
            message: "Please select one of the following options:",
            choices: ['Add Engineer', 'Add Intern', 'Finish Building My Team'],
        }
    ])
        .then((answers) => {

            if (answers.members === "Add Engineer") {
                return addEngineer();
            }

            else if (answers.members === "Add Intern") {
                return addIntern();
            }

            else if (answers.members === "Finish Building My Team") {
                // code for creating rendering the HTML
                console.log("Your team was built!");
            }
        });
}

// function to add engineer to team
const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the engineer's name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter the engineer's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the engineer's employee ID:",
            validate: idInput => {
                if (idInput) {
                    return true;
                }
                else {
                    console.log("Please enter the engineer's employee ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the engineer's email address:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log("Please enter the engineer's email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the engineers github username",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                }
                else {
                    console.log("Please enter the engineer's github username");
                    return false;
                }
            }
        },
    ]) 
    .then((response) => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        teamMembers.push(engineer);
    })
    .then(addMember);
}

// function to add intern to team 
const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the intern's name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log("Please enter the intern's name");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the intern's employee ID:",
            validate: idInput => {
                if (idInput) {
                    return true;
                }
                else {
                    console.log("Please enter the intern's employee ID");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the intern's email address:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                }
                else {
                    console.log("Please enter the intern's email");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school:",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                }
                else {
                    console.log("Please enter the intern's school");
                    return false;
                }
            }
        },
    ]) 
    .then((response) => {
        const intern = new Intern(response.name, response.id, response.email, response.school);
        teamMembers.push(intern);
    })
    .then(addMember);
}

promptManager()
    .then(addMember)
    .then(teamHTML);

// pseudo coding: 

// install inquirer and jest (done)

// create HTML page with styling and add template to src/page-template (done)

// create the Employee parents class with the following properties:
// name, id, email, getName(), getId(), getEmail(), getRole() <- returns 'Employee'

// create the other three classes that will extend Employee (inherit)
// In addition to the inherited properties: 

// Manager will have: 
// officeNumber and getRole() <- overrides 'Employee' and returns 'Manager'

// Engineer will have: 
// github (github username), getGithub(), getRole() <- overrides 'Employee' and returns 'Engineer'

// Intern will have:
// school, getSchool(), and getRole() <- overrides 'Employee' and returns 'Intern'


// questions for prompts: (done)

// The team managers name, employee ID, email address, and office number

// Would you like to add an engineer or intern or finish building your team? (If engineer or intern is selected, prompt engineer or intern question. If finish building team, generate HTML page.)

// Prompt previous question again. 

// Generate HTML page to dist
