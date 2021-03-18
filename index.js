// TODO: Include packages needed for this application
//node modules
const fs = require("fs")
//NPM modules
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
        //these are an array of question objects
      type: 'input',
      message: 'What is the project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What was your motivation?',
      name: 'motivation',
    },
    {
      type: 'input',
      message: 'Why did you build this project?',
      name: 'build',
    },
    {
        type: 'input',
        message: 'Please provide a description of your project.',
        name: 'description',
      },
    {
        type: 'input',
        message: 'What are the steps required to install your app?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'What is the usage?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Whose credit is this work?',
        name: 'credit',
      },
    {
      type: 'list',
      message: 'What license did you use?',
      name: 'license',
      choices: ["MIT License", "Apache License 2.0", "ISC"]
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'test',
      },
    {
        type: 'input',
        message: 'GitHub username:',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
  ])
  .then(function(data){
      console.log(data);
  });

// const questions = [];

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
function init(generateMarkdown) {}

// // Function call to initialize app
init();
