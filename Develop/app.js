const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];


function createManager() {
    inquirer
        .prompt([
            {
                name: "name",
                message: "What is the team manager's name?"
            },

            {
                name: "id",
                message: "What is the team manager's employee id?"
            },

            {
                name: "email",
                message: "What is the team manager's email?"
            },

            {
                name: "officeNumber",
                message: "What is the team manager's office number?"
            }
        ])

        .then(function (response) {
            const name = response.name;
            const id = response.id;
            const email = response.email;
            const officeNumber = response.officeNumber;

            const teamManager = new Manager(name, id, email, officeNumber);

            employees.push(teamManager);
            confirmNewEmployee();
        })
}

function createEngineer() {
    inquirer
        .prompt([
            {
                name: "name",
                message: `what is the engineer's name?`
            },

            {
                name: "id",
                message: `what is the engineer's employee id?`
            },

            {
                name: "email",
                message: `what is the engineer's email?`
            },

            {
                name: "github",
                message: `what is the engineer's github username?`
            },
        ])

        .then(function (response) {
            const name = response.name;
            const id = response.id;
            const email = response.email;
            const github = response.github;

            const newEngineer = new Engineer(name, id, email, github);
            employees.push(newEngineer);
            confirmNewEmployee();
        })
}

function createIntern() {
    inquirer
        .prompt([
            {
                name: "name",
                message: `what is the intern's name?`
            },

            {
                name: "id",
                message: `what is the intern's employee id?`
            },

            {
                name: "email",
                message: `what is the intern's email?`
            },

            {
                name: "github",
                message: `what school is the intern enrolled in`
            },
        ])

        .then(function (response) {
            const name = response.name;
            const id = response.id;
            const email = response.email;
            const github = response.school;

            const newIntern = new Intern(name, id, email, github);
            employees.push(newIntern);
            confirmNewEmployee();
        })
}


function getEmployeeType() {
    const employeeTypes = ["Engineer", "Intern"]
    
    inquirer
        .prompt([
            {
                type: "list",
                name: "employeeType",
                message: "Select the type of employee to add",
                choices: employeeTypes
            }
        ])
        .then(function(response) {
            if (response.employeeType === "Engineer") {
                createEngineer();
            } else if (response.employeeType === "Intern") {
                createIntern();
            }
        })
    }
    
    function confirmNewEmployee() {
        inquirer
            .prompt([
                {
                    type: "confirm",
                    name: "confirmAddEmployee",
                    message: "Do you want to add a new employee?"
                }
            ])
            .then(function (response) {
                if (response.confirmAddEmployee) {
                    getEmployeeType();
                } else {
                    // call create team
                    
                    fs.writeFileSync(outputPath, render(employees));
                }
            });
    }
    // Write code to use inquirer to gather information about the development team members,
    // and to create objects for each team member (using the correct classes as blueprints!)
createManager();



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.


// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
