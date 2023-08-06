

// a function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  ![GitHub](https://img.shields.io/github/license-${data.license}-yellow)

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Question](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributing
  ${data.contributors}

  ## Test
  ${data.tests}

  ## Questions
  Feel free to email me at ${data.email} with questions. You can view more of my projects here:[${data.username}](https://github.com/${data.username}). 

`;
}

module.exports = generateMarkdown;
