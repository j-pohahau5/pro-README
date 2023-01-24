// TODO: Include packages needed for this application
// making a const inquirer to it constantly has the value of require method requiring inquirer
const inquirer = require("inquirer");
// making a const fs to it constantly has the value of require method requiring fs
const fs = require("fs");
const generateMarkdown = require ("./utils/generateMarkdown");
const fileName = "README.md";

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your Project title?",
        name: "title",
    },
    {
        type: "input",
        message: "What is the description of your Project?",
        name: "description",  
    },
    {
        type: "input",
        message: "How do you install your Project?",
        name: "installation",
    },
    {
        type: "input",
        message: "How do you use your Project?",
        name: "usage",
    },
    {
        type: "input",
        message: "What are your Contribution guide lines?",
        name: "contribution",
    },
    {
        type: "input",
        message: "What are your test instructions?",
        name: "tests",
    },
    {
        type: "checkbox",
        message: "Select the license that suits your needs",
        name: "license",
        choices: ["mit", "gpl-3.0", "isc", "cc0-1.0", "CC-BY-4.0", "CC-BY-SA-4.0", "cern-ohl-p-2.0", "cern-ohl-w-2.0"]
    },
    {
        type: "input",
        message: "What is your Github user name?",
        name: "userName",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data)
    fs.writeFile(fileName, markdown, function(err){
        if(err) throw err;
        console.log("yessah!😁")
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data) {
        writeToFile(fileName, data)
    }); 
}

// Function call to initialize app
init();
