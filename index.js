const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');
const Employee = require('./lib/Employee');

const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is team Manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the Manager's employee ID:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the Manager's email address:"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the Manager's office number:",
        }
    ])
}

// user selects wether or not they want to add a team member or finish team
const addMember = memberData => {
    
    // teamMembers = [];

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
                console.log('Your team has been created!');
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
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the engineer's employee ID:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the engineer's email address:",
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the engineers github username",
        },
    ]) 
    .then(answers => console.log(answers))
    .then(addMember);
}

// function to add intern to team 
const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter the intern's name:",
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the intern's employee ID:",
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the intern's email address:",
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school:",
        },
    ]) 
    .then(answers => console.log(answers))
    .then(addMember);
}

promptQuestions()
    .then(answers => console.log(answers))
    .then(addMember)
    .then(addMemberAnswers => console.log(addMemberAnswers));





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
