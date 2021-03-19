// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license === "Apache-2.0")
    return `<img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg"></img>`
    if(license === "ISC")
    return `<img src="https://img.shields.io/badge/License-ISC-blue.svg"></img>`
    if(license === "MIT")
    return `<img src="https://img.shields.io/badge/License-MIT-yellow.svg"></img>`
    
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license === "Apache-2.0")
    return "https://opensource.org/licenses/Apache-2.0"
    if(license === "ISC")
    return "https://opensource.org/licenses/ISC"
    if(license === "MIT")
    return "https://opensource.org/licenses/MIT"
    
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    
  return `
##${data.title}
\n\n
${renderLicenseBadge(data.license)}

## Description

${data.motivation}
${data.build}
${data.description}

## Table of Contents

-[Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[Credits](#credits)
-[License](#license)
-[Tests](#tests)


## Installation

${data.installation}


## Usage

${data.usage}

    
## Credits

${data.credit}


## License

For more information on the License, please click on the link: 
-[License] ${renderLicenseLink(data.license)}


## Tests
${data.test}

-[GitHub] {https://github.com/${data.username}}

##Questions
To contact me directly, please email me at: ${data.email}.

`;
}

module.exports = generateMarkdown;
