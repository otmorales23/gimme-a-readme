// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Title of ReadMe:"
        },

        {
            type: "input",
            name: "Description",
            message: "Description of ReadMe:"
        },

        {
            type: "input",
            name: "Table of Contents",
            message: "Links for Table of Contents:"
        },

        {
            type: "input",
            name: "Installation",
            message: "How to Install Application:"
        },

        {
            type: "input",
            name: "Usage",
            message: "How to use application:"
        },

        {
            type: "input",
            name: "Contributing",
            message: "Who contributed to the application?"
        },

        {
            type: "input",
            name: "Tests",
            message: "How to run tests:"
        },

        {
            type: "list",
            name: "License",
            message: "Is there a license included?",
            choices: [
                {name: "Apache"},
                {name: "MIT"},
                {name: "GNU"},
                {name: "none"}
            ]
        },

    ]).then((response) => {
        console.log(response);

    })
}

// Function call to initialize app
init();

//correct imports/requires
//prompt user with quesetions using Inquirer
//.then statement to handle responses to write readme
//templating to generate markdown