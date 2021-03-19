// TODO: Include packages needed for this application
//node modules
const fs = require("fs")
//NPM modules
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require ("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions =[
    {
        //these are an array of question objects
      type: 'input',
      message: 'What is the project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What was your motivation for this app?',
      name: 'motivation',
    },
    {
      type: 'input',
      message: 'Why did you build this app?',
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
        message: 'Whose credit is this work? List any and all contributors.',
        name: 'credit',
      },
    {
      type: 'list',
      message: 'What license did you use? Provide instructions to include dependecies.',
      name: 'license',
      choices: ["MIT", "Apache-2.0", "ISC"]
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
      }
  ]


// // TODO: Create a function to write README file
function writeToFile(fileName, data){
    fs.writeFile(fileName, generateMarkdown(data), ()=>{});
}


// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md", data);
        console.log(data)
    });
}

// // Function call to initialize app
init();
