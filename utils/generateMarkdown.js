// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
// https://img.shields.io/badge/



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
export default function generateMarkdown(response) {
  return `#${response.title}

  ## Table of Contents
  *[Description](#description)
  *[Installation](#installation)
  *[Usage](#usage)
  *[Tests](#tests)
  *[Contributors](#contributors)
  *[License](#license)
  *[Questions](#questions)

  ## Description
  ${response.description}

  ![${response.imageAlt}](${response.imageUrl})

`;
}

