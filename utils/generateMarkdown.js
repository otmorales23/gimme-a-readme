function renderLicenseBadge(license) {
  if (license === "none") {
    return ``
  }
  else {
    return `![Badge](https://img.shields.io/badge/license-${license}-pink)`
  }
 }


function renderLicenseLink(license) {
  if (license === "none") {
    return ``
  }
  else {
    return `* [License](#license)`;
  }
 }

function renderLicenseSection(license) {
  if (license === "none") {
    return ``
  }
  else {
    return `## License 
    This project is licensed with ${license}`;
  }
 }

export default function generateMarkdown(response) {
  return `${renderLicenseBadge(response.license)}
  
  # ${response.title}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Contributors](#contributors)
  * [Questions](#questions)
  ${renderLicenseLink(response.license)}

  ## Description
  ${response.description}

  ![${response.imageAlt}](${response.imageUrl})

  ## Installation
  ${response.installation}

  ## Usage
  ${response.usage}

  ## Tests
  ${response.tests}

  ## Contributors
  ${response.contributors}

  ## Questions
  ${response.questions}

  ${renderLicenseSection(response.license)}

`;
}

