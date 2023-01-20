// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your Project title?",
        input: "title",
    },
    {
        type: "input",
        message: "What is your table of contents?",
        input: "table of contents",
    },
    {
        type: "input",
        message: "What is the description of your Project?",
        input: "description",
    },
    {
        type: "input",
        message: "How do you install your Project?",
        input: "installation",
    },
    {
        type: "input",
        message: "How do you use your Project?",
        input: "usage",
    },
    {
        type: "input",
        message: "What are your Contribution guide lines?",
        input: "contribution",
    },
    {
        type: "input",
        message: "What are your test instructions?",
        input: "tests",
    },
    {
        type: "input",
        message: "Select the license that suits your needs",
        name: "license",
        choices: ["MIT", "Apache", "GNU", "WordPress", "Rust"]
    },
    {
        type: "input",
        message: "What is your Github user name?",
        input: "user name",
    },
    {
        type: "input",
        message: "What is your email?",
        input: "email",
    },
    {
        type: "input",
        message: "What is your Github link?",
        input: "link",
    },
];
console.log(questions)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
