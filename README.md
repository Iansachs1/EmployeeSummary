# EmployeeSummary

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


        