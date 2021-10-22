const inquirer = require('inquirer');
const fs = require('fs');
const questions = require('./createReadme');

inquirer
    .prompt(questions)
    .then(response => {
        fs.writeFile('README.md', readMeStruct(response) , (err) =>
            err ? console.log(err) : console.log('Success!'));
    });

// const resourceLinks = resources.split(",");
// const installationSteps = installation.split(",");

const readMeStruct = ({projectName, description, installation, usageInst, usageImg, credits, license, githubUN, email}) =>
`# ${projectName}
## Description
${description}\n
Live Link: [title](https://github.com/${githubUN}/${projectName})
${description}\n
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)
## Installation
## Usage
${usageInst}
![${usageImg}](./images/${usageImg})
## Credits
### People
${credits}
### Resources
${resources}
## License
![alt text](https://img.shields.io/static/v1?label=${license}&message=${license}&color=brightgreen&style=plastic
## Questions
Github UN ${githubUN} [title](https://github.com/${githubUN})
You can contact me via email by emailing ${email} with your questions
`