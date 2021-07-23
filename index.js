// node modules
const inquirer = require('inquirer');

// employee classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// render HTML function
const generateHTML = require('./src/template')

// writefile function
const writeFile = require('./src/writefile')

// create array of employees
const employeeArray = [];

// manager prompts
const promptManager = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter manager name.'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter manager ID.'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter manager email.'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter manger office number.'
        },
        {
            type: 'list',
            name: 'addEmployee',
            message: 'What type of employee would you like to add to your team?',
            choices: ['Engineer', 'Intern', 'None']
        }
    ])
    .then(managerData => {
        const { name, id, email, officeNumber, addEmployee } = managerData;
        const manager = new Manager (name, id, email, officeNumber);

        employeeArray.push(manager);
        console.log(manager);

        if (addEmployee === "Engineer") {
            return promptEngineer();
        } else if (addEmployee === "Intern") {
            return promptIntern();
        } else {
            return employeeArray;
        }

    })
};

// engineer prompts
const promptEngineer = () => {
    console.log(`
=================
Add a New Engineer
=================
`);

    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter engineer name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter engineer ID',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter engineer email'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter engineer GitHub username'
        },
        {
            type: 'list',
            name: 'addEmployee',
            message: 'What type of employee would you like to add to your team?',
            choices: ['Engineer', 'Intern', 'None']
        }
    ])
    .then(engineerData => {
        const { name, id, email, github, addEmployee } = engineerData;
        const engineer = new Engineer (name, id, email, github);

        employeeArray.push(engineer);
        console.log(engineer);

        if (addEmployee === "Engineer") {
            return promptEngineer();
        } else if (addEmployee === "Intern") {
            return promptIntern();
        } else {
            return employeeArray;
        }
    })
};


// intern prompts
const promptIntern = () => {
    console.log(`
=================
Add a New Intern
=================
`);

    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter intern name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter intern ID',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter intern email'
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter intern school name'
        },
        {
            type: 'list',
            name: 'addEmployee',
            message: 'What type of employee would you like to add to your team?',
            choices: ['Engineer', 'Intern', 'None']
        }
    ])
    .then(internData => {
        const { name, id, email, school, addEmployee } = internData;
        const intern = new Intern (name, id, email, school);

        employeeArray.push(intern);
        // console.log(manager);

        if (addEmployee === "Engineer") {
            return promptEngineer();
        } else if (addEmployee === "Intern") {
            return promptIntern();
        } else {
            return employeeArray;
        }
    })
};


// initialize app
promptManager()
    .then(employeeArray => {
        return generateHTML(employeeArray);
    })
    // .then( data => {
    //     return writeFile(data);
    // })
    .catch(err => {
        console.log(err);
    }) ;