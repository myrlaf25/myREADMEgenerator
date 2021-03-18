// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]
    [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]
    [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]
    [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    (https://opensource.org/licenses/Apache-2.0)
    (https://opensource.org/licenses/ISC)
    (https://opensource.org/licenses/MIT)
    (http://unlicense.org/)
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## ${data.title}


## Description
![License](https://img.shields.io/badge/License-${response.license}-blue.svg "License Badge")
${data.motivation}
${data.build}
${data.description}


## Table of Contents (Optional)
-[Description](#description)
-[Installation](#installation)
-[Usage](#usage)
-[Credit](#credit)
-[License](#license)
-[Test](#test)


## Installation
${data.installation}


## Usage
${data.usage}


## Credits
${data.credit}


## License

For more information on the License, please click on the link: 
-[License] (https://opensource.org/licenses/${data.license})


## Tests
${data.test}

-[GitHub] {https://github.com/${data.username}}
To contact me directly, please email me at: ${data.email}.

`;
}

module.exports = generateMarkdown;
