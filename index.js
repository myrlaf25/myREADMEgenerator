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
        message: 'What are the steps required to install your app?',
        name: 'installation',
      },
    {
        
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'languages',
      choices:["English", "Spanish", "French", "German"]
    },
    {
      type: 'list',
      message: 'What license did you use?',
      name: 'license',
      choices: ["MIT License", "Apache License 2.0", "the Unlicense"]
    },
    {
        type: 'input',
        message: 'GitHub username:',
        name: 'github',
      },
  ])
  .then(function(data){
      console.log(data);
  });

// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
