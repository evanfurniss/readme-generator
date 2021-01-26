// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let link = renderLicenseLink(license);
  let licenseDescription = renderLicenseSection(license);

  return `![${license} license tag](${link})
  
  ${license} Description: ${licenseDescription}`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://img.shields.io/badge/license-MIT-blue";
  }
  else if (license === "GPL-3.0") {
    return "https://img.shields.io/badge/license-GNU-green";
  }
  else if (license === "Apache-2.0") {
    return "https://img.shields.io/badge/license-Apache-yellow";
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license != "") {
    return `https://opensource.org/licenses/${license}`;
  }
  else {
    return "";
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = renderLicenseBadge(data.license);

  return `# ${data.title}
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contribution](#contribution)
    * [License](#license)
    
  # Installation
    ${data.installation}
  ## Usage
    ${data.usage}
  ## Description
    ${data.description}
  ## Contribution
    ${data.contributors}
  ## License
    License Information: ${license}
  ## Tests
    ${data.test}
  ## Questions
    ${data.questions}

  # Contact
    * GitHub: ${data.git}
    * LinkedIn: ${data.linkedin}
    * Email: ${data.email}`
;
}

module.exports = generateMarkdown;
