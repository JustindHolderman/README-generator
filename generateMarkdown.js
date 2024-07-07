
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-blue.svg)`;
  }
  return "";
}

function renderLicenseLink(license) {
  if (license !== "None") {
    return `5. [License Agreement:](#license-agreement)`
  }
  return ""
}


function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License Agreement: \n This license is subject to the ${license} agreement.`
  }
  return "";
}

function generateMarkdown(data) {
  return `
   
  > # ${data.projectTitle}\n
  > ${renderLicenseBadge(data.license)}\n
  > ## Table of Contents\n
  1. [Description:](#description)
  2. [Installation:](#installation)
  3. [Usage:](#usage)
  4. [How to Contribute:](#how-to-contribute)
  ${renderLicenseLink(data.license)}
  6. [Test Instructions:](#test-instructions)
  7. [Questions:](#questions)

  > ## Description:
  ${data.projectDescription}

  > ## Installation:
  ${data.installInstructions}

  > ## Usage:
  ${data.usage}
  
  > ## How to Contribute:
  ${data.contribute}
  
  > ${renderLicenseSection(data.license)}

  > ## Test Instructions:
  ${data.test}
  
  > ## Questions:
  If you have any question please [${data.userName}](https://github.com/${data.userName}) or send me an email to: ${data.email}
      `;
}

module.exports = generateMarkdown;