// TODO: Include packages needed for this application
const inquire = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "How would you describe this project?",
        name: "description"
    },
    {
        type: "input",
        message: "What are the steps to install this program?",
        name: "installation"
    },
    {
        type: "input",
        message: "How will end-users use your product?",
        name: "usage"
    },
    {
        type: "list",
        message: "What license would you like to use? (use arrow keys to navigate)",
        name: "license",
        choices: "[]"
    },
    {
        type: "input",
        message: "How can others contribute to this project?",
        name: "contributors"
    },
    {
        type: "input",
        message: "What tests were written for this README?",
        name: "test"
    },
    {
        type: "input",
        message: "Where can people go to ask questions about this project?",
        name: "questions"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
