// pseudo coding: 

// install inquirer and jest

// create HTML page with styling and add template to src/page-template

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
