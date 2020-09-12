# Work Team Members Summary Page Generator

  ## Description
  
This is a CLI app that prompts the user to fill out employee information for each manager, engineer, and intern in their team and writes that information into an html document that clearly displays every team members info. each different type of employee has different prompts and displays different information relevant to their specific role.
  
## Table of Contents
  
[1. Description](##-Description)
  
[2. Installation](##-Installation)
  
[3. Usage](##-Usage)
  
[4. License](##-License)
  
[5. Contributing](##-Contributing)
  
[6. Tests](##-Tests)
  
[7. Questions](##-Questions)
  
## Installation
  
clone the repository onto your your computer, in terminal navigate to the develop folder of the repository, run "npm i" to install required node dependancies.
  
## Usage
  
This application is used to organize and display all the employees on a team's information in a webpage. to use it navigate to the develop folder in the repository after following the installation guidelines and run "node app.js" then fill out the prompts. the finished html file ready for deployment will be written to the output folder in the repository.
  
## Licenses
  
No licenses at this time
  
## Contributing
  
reach out to me using the contact info below to see how to contribute
  
## Tests
  
I used jest tests to confirm that the parent class Employee, and all of its subclasses (Manager, Engineer, and Intern) took in the required arguments and outputted a proper object.
  
## Questions

If you have any questions, please reach out to me through email or via github:

iansachs1@gmail.com

https://github.com/iansachs1

### PseudoCode ###

classes and subclassses built according to the tests

const employees = []

Manager

    inquirer 

        question: "what is your the manager's name?"
        response: name

        question: "what is the manager's employee id?"
        response: id#

        question: "what is the manager's email?"
        response: manager email

        question: "what is the manager's office number"
        response: office number

    new manager (response1, response2, response3, response 4)
    employees.push(new manager)
    confirmAddEmployee()
    

Engineer

    inquirer

        question: "how many engineers are in your team?"
        response: number

    for (response from first inquirer prompt) loops

        inquirer

            question: "what is engineer" + i + "'s name"
            response: name

            question: "what is engineer" + i + "'s employee id?"
            response: id#

            question: "what is engineer" + i + "'s email?"
            response: email

            question: "what is enngineer" + i + "'s github username?"
            response: github

        new engineer(response1, response2, response3, response4)
        employees.push(new engineer)
        confirmAddEmployee()

Intern

    inquirer

        question: "how many interns are in your team?"
        response: number

    for (response from first inquirer prompt) loops

        inquirer

            question: "what is intern" + i + "'s name"
            response: name

            question: "what is intern" + i + "'s employee id?"
            response: id#

            question: "what is intern" + i + "'s email?"
            response: email

            question: "what school is intern" + i + "'s enrolled at?"
            response: school

        new intern(response1, response2, response3, response4)
        employees.push(new intern)
        confirmAddEmployee()

confirmAddEmployee

    inquirer
        type: confirm
        name: addEmployee
        message: do you want to add another employee

    then if add employee is true
        getEmployeeType()

    else
        renderHTML and write a new html file into the outputs folder 

getEmployeeType

    inquirer
        type: list
        name: employeeType
        message: what type of employee do you want to add?
        options: [engineer, intern]

    then
        if the response is engineer
            create engineer
        else if the response is intern
            create intern


        