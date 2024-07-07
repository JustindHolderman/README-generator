// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const colors = require("colors");
const generateMarkdown = require("./generateMarkdown");

const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "projectTitle",
    },
    {
        type: "input",
        message: "What is brief description of the project?",
        name: "projectDescription",
    },
    {
        type: "input",
        message: "How is it installed?",
        name: "installInstructions",
    },
    {
        type: "input",
        message: "What are the contribution guidlines?",
        name: "contribute"
    },
    {
        type: "input",
        message: "What is the usage of the application?",
        name: "usage",
    },
    {
        type: "input",
        message: "What are your test instructions?",
        name: "test"
    },
    {
        type: "input",
        message: "Enter your GitHub username",
        name: "userName",
    },
    {
        type: "list",
        message: "What license do you require?",
        name: "license",
        choices: [
            "Eclipse",
            "GNU",
            "IBM",
            "MIT",
            "None",
        ]
    },
    {
        type: "input",
        message: "Enter your email address?",
        name: "email",
    }
];

function writeToFile(fileName, data) {
    const content = generateMarkdown(data);
    fs.writeFile(fileName, content, function (err) {
        console.log(err ? err : "README Successfully Written!");
    });
}
function init() {
    inquirer.prompt(questions).then(function (data) {
        const fileName = "./README.md";
        writeToFile(fileName, data);
    });
}

init();
