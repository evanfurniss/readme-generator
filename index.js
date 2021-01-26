// TODO: Include packages needed for this application
const inquire = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./util/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
        default: "Project Title",
        validate: (answer) => (answer.length < 1) ? console.log("Input required") : true
    },
    {
        type: "input",
        message: "What is the project description?",
        name: "description",
        default: "Description",
        validate: (answer) => (answer.length < 1) ? console.log("Input required") : true
    },
    {
        type: "input",
        message: "What are the steps to install this program, if any?",
        name: "installation",
        default: "Installation Instructions",
    },
    {
        type: "input",
        message: "How will end-users use your product?",
        name: "usage",
        default: "Usage",
    },
    {
        type: "list",
        message: "What license would you like to use?",
        name: "license",
        choices: ['GPL-3.0','MIT','Apache-2.0'],
    },
    {
        type: "input",
        message: "How can others contribute to this project, if applicable?",
        name: "contributors"
    },
    {
        type: "input",
        message: "What tests were written for this README, if any?",
        name: "test",
        default: "none"
    },
    {
        type: "input",
        message: "Please input your GitHub username",
        name: "git",
        default: "evanfurniss"
    },
    {
        type: "input",
        message: "Please enter your email",
        name: "email",
        default: "evanfurniss@gmail.com"
    }
];

inquire .prompt(questions)

.then((response) => writeToFile(response));

function writeToFile(data) {
    fs.writeFile("README.md", generateMarkdown(data), (err) => {
        if (err) {
            console.log(err);
        }
        console.log("Success!");
    })
}