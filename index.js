const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');
const Employee = require('./lib/Employee');

const questions = [
    {
        type: 'text',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'text', 
        name: 'id',
        message: 'What is the employee ID?',
    }, 
    {
        type: 'text',
        name: 'email', 
        message: "What is the employee's email address?"
    }
]

function init() {


}

module.exports = init;
















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


// questions for prompts: 

// The team managers name, employee ID, email address, and office number

// Would you like to add an engineer or intern or finish building your team? (If engineer or intern is selected, prompt engineer or intern question. If finish building team, generate HTML page.)

// Prompt previous question again. 

// Generate HTML page to dist
