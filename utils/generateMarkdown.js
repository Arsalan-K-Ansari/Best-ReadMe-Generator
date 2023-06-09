// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  
  # ${answers.title}

  ## Table Of Contents
  ---
  - [Description](#description) 
  - [Installation Instructions](#installation) 
  - [Usage information](#usage)
  - [License](#license)
  - [Contribution Quideline](#Contributing)
  - [Test instructions](#tests)
  - [Questions](#questions)

  ## Description
  ---
  ${answers.Description}
  
  
  
  
  ## Installation
  ----
  ${answers.Installation}
  
  ## Usage
  ---

  ${answers.usage}
  
  
  ## License 
  -----
  ${answers.license}


  ## Contributing Guidlines
  ----
  ${answers.contributing}

  ## Tests
  ---
  ${answers.Tests}

  ## Questions
  ---
  ### Contact 
  
  ${answers.github} 
  ${answers.email}
  
`;
}

module.exports = generateMarkdown;
