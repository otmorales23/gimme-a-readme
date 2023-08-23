import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Title of ReadMe:"
        },

        {
            type: "input",
            name: "description",
            message: "Description of ReadMe:"
        },

        {
            type: "input",
            name: "imageAlt",
            message: "Alt text for image"
        },

        {
            type: "input",
            name: "imageUrl",
            message: "URL for image"
        },

        {
            type: "input",
            name: "installation",
            message: "How to Install Application:"
        },

        {
            type: "input",
            name: "usage",
            message: "How to use application:"
        },

        {
            type: "input",
            name: "tests",
            message: "How to run tests:"
        },

        {
            type: "input",
            name: "contributors",
            message: "Who contributed to the application?"
        },

        {
            type: "list",
            name: "license",
            message: "Is there a license included?",
            choices: [
                { name: "Apache" },
                { name: "MIT" },
                { name: "GNU" },
                { name: "none" }
            ]
        },

        {
            type: "input",
            name: "questions",
            message: "How can people reach you if they have questions?"
        }

    ]).then((response) => {
        fs.writeFile("generatedREADME.md", generateMarkdown(response), (err) => {
            if (err)
                console.log(err);
            else {
                console.log("README generated successfully");
            }
        })
    })
}

// Function call to initialize app
init();
