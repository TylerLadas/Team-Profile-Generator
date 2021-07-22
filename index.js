const { prompt } = require('inquirer');
const inquirer = require('inquirer');

const promptManager = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter manger name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter manager ID',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter manager email'
        },
        {
            type: 'input',
            name: 'office',
            message: 'Enter manger office number'
        },
        {
            type: 'list',
            name: 'addEmployee',
            message: 'What type of employee would you like to add to your team?',
            choices: ['Engineer', 'Intern', 'None']
        }
    ]);
};

const promptEngineer = () => {
    console.log(`
=================
Add a New Engineer
=================
`);

    // if (!portfolioData.projects) {
    //     portfolioData.projects = [];
    // }
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Enter engineer name'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'Enter engineer ID',
        },
        {
            type: 'input',
            name: 'engineerEmail',
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
    ]);
};

const promptIntern = () => {
    console.log(`
=================
Add a New Intern
=================
`);

    // if (!portfolioData.projects) {
    //     portfolioData.projects = [];
    // }
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'Enter intern name'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'Enter intern ID',
        },
        {
            type: 'input',
            name: 'internEmail',
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
    ]);
};

// promptManager();
// promptEngineer();
promptIntern();