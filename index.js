// TODO: Include packages needed for this application
const inquire = require("inquirer");
const fs = require("fs");
const markdown = require("./util/generateMarkdown")

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
        message: "How would you describe this project?",
        name: "description",
        default: "Description",
        validate: (answer) => (answer.length < 1) ? console.log("Input required") : true
    },
    {
        type: "input",
        message: "What are the steps to install this program?",
        name: "installation",
        default: "Installation Instructions",
        validate: (answer) => (answer.length < 1) ? console.log("Input required") : true
    },
    {
        type: "input",
        message: "How will end-users use your product?",
        name: "usage",
        default: "Usage",
        validate: (answer) => (answer.length < 1) ? console.log("Input required") : true
    },
    {
        type: "list",
        message: "What license would you like to use? (use arrow keys to navigate)",
        name: "license",
        choices: ['GNU','MIT','Apache', 'Default'],
        default: "License",
        validate: (answer) => (answer.length < 1) ? console.log("Input required") : true
    },
    {
        type: "input",
        message: "How can others contribute to this project?",
        name: "contributors",
        default: "Contributors",
        validate: (answer) => (answer.length < 1) ? console.log("Input required") : true
    },
    {
        type: "input",
        message: "What tests were written for this README?",
        name: "test",
        default: "Testing",
        validate: (answer) => (answer.length < 1) ? console.log("Input required") : true
    },
    {
        type: "input",
        message: "Where can people go to ask questions about this project?",
        name: "questions",
        default: "Questions",
        validate: (answer) => (answer.length < 1) ? console.log("Input required") : true
    },
    {
        type: "input",
        message: "Please input your GitHub username",
        name: "git",
        default: "GitHub",
        validate: (answer) => (answer.length < 1) ? console.log("Input required") : true
    },
    {
        type: "input",
        message: "Please enter your email",
        name: "email",
        default: "Email",
        validate: (answer) => (answer.length < 1) ? console.log("Input required") : true
    },
    {
        type: "input",
        message: "Please enter your LinkedIn username",
        name: "linkedin",
        default: "LinkedIn",
        validate: (answer) => (answer.length < 1) ? console.log("Input required") : true
    }
];

inquire .prompt(
    questions
)
.then(({
    title,
    description,
    installation,
    usage,
    license,
    contributors,
    test,
    questions,
    git,
    email,
    linkedin
}) => {
    const format = `# ${title}

    * [Installation](#installation)
    * [Usage](#usage)
    * [Contribution](#contribution)
    * [License](#license)
    
    # Installation
    ${installation}
    ## Usage
    ${usage}
    ## Description
    ${description}
    ## Contribution
    ${contributors}
    ## License
    ${license}
    ## Tests
    ${test}
    ## Questions
    ${questions}

    # Contact
    * GitHub: ${git}
    * LinkedIn: ${linkedin}
    * Email: ${email}`
    
    createReadme (title, format);
}
);

function createReadme (title, data) {
    fs.writeFile(`./${title}.md`,data, (err) =>{
        if (err){
            console.log(err);
        }
        console.log("README created!");
    });
};