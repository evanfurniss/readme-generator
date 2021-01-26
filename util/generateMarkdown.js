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
  let link = renderLicenseBadge(license);
  let licenseDef = renderLicenseLink(license);

  return `![${licenseDef} license tag](${link})
  
  Description: ${licenseDef}`;
}

// Creates the structure of the README
function generateMarkdown(data) {
  // README template literal, the contents of the README.md
  return `# ${data.title}
  ![${data.license} License Badge](${renderLicenseBadge(data.license)})

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

  ${renderLicenseSection(data.license)}

  ## Tests

  ${data.test}

  ## Questions

  Questions can be asked by following the links below to message me on LinkedIn or email.

  # Contact
  * GitHub: https://github.com/${data.git}
  * LinkedIn: ${data.linkedin}
  * Email: ${data.email}`
;
}

// Allow this module to be used on separate JS file.
module.exports = generateMarkdown;
