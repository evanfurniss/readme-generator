// Identifies which license type and returns a badge with the specified license type
function renderLicenseBadge(license) {
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

// Links to the explained license type
function renderLicenseLink(license) {
  if (license != "") {
    return `https://opensource.org/licenses/${license}`;
  }
  else {
    return "";
  };
}

// Creates license section for README
function renderLicenseSection(license) {
  let link = renderLicensebadge(license);
  let license = renderLicenseLink(license);

  return `![${license} license tag](${link})
  ${license} Description: ${licenseDescription}`;
}

// Creates the structure of the README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Table of Contents
  
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

  ${renderLicenseBadge(data.license)}

  ## Tests

  ${data.test}

  ## Questions

  Questions can be asked by following the below links to message, email, or 
  push into the repo.

  # Contact
  * GitHub: ${data.git}
  * LinkedIn: ${data.linkedin}
  * Email: ${data.email}`
;
}

module.exports = generateMarkdown;
