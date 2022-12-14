// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: '๐ Welcome to the README Generator! First, what is your name?'
    },
    {
        type: 'input',
        name: 'github',
        message: '๐ What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: '๐จ What is your email?'
    },
    {
        type: 'input',
        name: 'title',
        message: '๐ฐ๏ธ  What is the title of your application?'
    },
    {
        type: 'input',
        name: 'description',
        message: '๐ Please provide a description: '
    },
    {
        type: 'input',
        name: 'installation',
        message: '๐พ What are the instructions for installation?'
    },
    {
        type: 'input',
        name: 'usage',
        message: '๐ป What are the instructions for usage?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: '๐ค How can others contribute to this application?'
    },
    {
        type: 'input',
        name: 'tests',
        message: '๐งช Please describe any tests written for your application and instructions on how to run them '
    },
    {
        type: 'list',
        name: 'licenses',
        message: '๐ท๏ธ Please choose the license you would like to include.',
        choices: ['Apache','GNU', 'ISC', 'MIT', 'Mozilla', 'Perl', 'SIL', 'WTFPL', 'None']
    }
];

// TODO: Create a function to write README file
const writeToFile = (data) => {
    fs.writeFile('./files/README.md', data, (err) => {
        if (err){
            return console.log('There was an error.')
        } else {
            console.log('Please check the "files" folder for your generated README.md file! Thank you!')
        }
    })
}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions)
}

// Function call to initialize app
init()
.then((userInput) => {
    return generateMarkdown(userInput)
})
.then((mdInfo) => {
    return writeToFile(mdInfo)
})
.catch((err) => {
    console.log(err)
})