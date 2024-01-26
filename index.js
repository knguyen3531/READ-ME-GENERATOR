// index.js

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this application?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    }
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log(`${fileName} has been generated!`);
    });
}

// Function to initialize app
function init() {
    console.log("Initializing README generator...");
    inquirer.prompt(questions)
        .then((answers) => {
            const markdownContent = generateMarkdown(answers);
            writeToFile('README.md', markdownContent);
        })
        .catch((error) => {
            console.error('An error occurred during the inquirer prompt:', error);
        });
}

// Function call to initialize app
init();
