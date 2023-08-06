// packages for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./utils/generateReadme');


// prompt user to answer questions
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'project title',
            message: 'What is the title of this project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a short description about this project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What steps are required to install this project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions on how to use this project.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for this project',
            choices: [
                'MIT',
                'GNU',
                'Open',
                'Academic',
            ]
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Who are the contributors for this project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Is there a test for this project?',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email?',
        },
        
        
    ])
}

// Create a function to write README file

const writeFile = data => {
    fs.writeFile('README.md', data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
    );
}
// Create a function to initialize app
function init() {}

// Function call to initialize app
init();
