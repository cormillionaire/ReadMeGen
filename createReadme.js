module.exports =
[{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'projectName',
},
{
    type: 'input',
    message: 'What is the description? Why did you build this project? What was your motivation?',
    name: 'description',
},
{
    type: 'input',
    message: 'What are the installation instructions step by step (split by comma, no space)?',
    name: 'installation',
},
{
    type: 'input',
    message: 'What is the usage instructions?',
    name: 'usageInst',
},
{
    type: 'input',
    message: 'What is the image url?',
    name: 'usageImg',
},
{
    type: 'input',
    message: "Who helped you and what's their github(ie. name - github,name - github)?",
    name: 'people',
},
{
    type: 'input',
    message: "Any links to resources (split by comma, no space)?",
    name: 'resources',
},
{
    type: 'input',
    message: 'What are the test instructions?',
    name: 'tests',
},
{
    type: 'list',
    message: 'What licenses did you use?',
    name: 'license',
    choices: ['MIT', 'GPLv3', 'Apache', 'ISC']
},
{
    type: 'input',
    message: "What's your github username?",
    name: 'githubUN',
},
{
    type: 'input',
    message: "What's your email for contact?",
    name: 'email',
},
]