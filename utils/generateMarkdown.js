// utils/generateMarkdown.js

// Function to return a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (!license || license === 'None') return '';
  return `![License](https://img.shields.io/badge/license-${license.replace(' ', '_')}-blue.svg)`;
}

// Function to return the license link
function renderLicenseLink(license) {
  if (!license || license === 'None') return '';
  return `[License](#license)`;
}

// Function to return the license section of README
function renderLicenseSection(license) {
  if (!license || license === 'None') return '';
  return `## License\nThis project is licensed under the ${license} license.`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)
${data.license !== 'None' ? '- [License](#license)' : ''}

## Installation
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
\`\`\`
${data.tests}
\`\`\`

## Questions
If you have any questions about the repo, open an issue or contact me directly at [${data.email}](mailto:${data.email}). You can find more of my work at [${data.github}](https://github.com/${data.github}).

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
