// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const MarkDown = require("./utils/generateMarkdown");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input

inquirer
  .prompt([
    { type: "input", name: "github", message: "What is your GitHub Username?" },

    { type: "input", name: "title", message: "What is the projects Title?" },

    { type: "input", name: "Description", message: "its Description?" },

    { type: "input", name: "Installation", message: "its Instrallations?" },

    { type: "input", name: "usage", message: "its usage?" },

    {
      type: "list",
      name: "license",
      message: "What license?",
      choices: [
        "MIT",
        "Creative Commons",
        "GNU",
        "ISC",
        "Eclipse Public License 1.0",
        "Do What The F*ck You Want To Public License",
        "Artistic license 2.0",
        "Boost Software License 1.0",
      ],
    },

    {
      type: "input",
      name: "contributing",
      message: "What are the Contribution Guidlines?",
    },

    {
      type: "input",
      name: "Tests",
      message: "What are the test instructions?",
    },

    { type: "input", name: "email", message: "What is your email?" },
  ])

  // TODO: Create a function to write README file

  .then((answers) => {
    // console.log(answers)
    const readmePageContent = generateMarkdown(answers);

    fs.writeFile("generatedREADME.md", readmePageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created README.me!")
    );
  });

// ReadMe Template

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
