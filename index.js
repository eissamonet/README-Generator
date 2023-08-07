// packages for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateReadme = require('./utils/generateMarkdown');


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
            message: 'Decribe the installation prcess for this project?',
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
            message: 'Who do I contact for questions or issues?',
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
        }
    ]);
};

const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Successfully wrote to README.md!')
        }
        
    })
};

promptUser()
.then(answers => {
    return generateReadme(answers);
})
.then(data => {
    return writeFile(data);
})
.catch(err => {
    console.log(err)
});
    