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
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
