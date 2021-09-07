//module requirements
const inquirer = require("inquirer");
const fs = require("fs");

//inquirer to generate
inquirer
  .prompt([
      {
        type: 'input',
        message: 'What is the title of the project?',
        name:'Title',
        validate: (value)=> {if(value){return true}else{return "i need a value to continue"}}
      },
      {
        type:'input',
        message:'how do you install the app?',
        name:'installation',
        validate: (value)=> {if(value){return true}else{return "i need a value to continue"}}
      },
      {
        type:'input',
        message:'instructions to to follow',
        name:'instructions',
        validate: (value)=> {if(value){return true}else{return "i need a value to continue"}}
      },
      {
        type:'input',
        message:'any credits?',
        name:'credits',
        validate: (value)=> {if(value){return true}else{return "i need a value to continue"}}
      },
      {
        type:'input',
        message:'how do you use your app?',
        name:'usage',
        validate: (value)=> {if(value){return true}else{return "i need a value to continue"}}
      },
      {
        type:'input',
        message:'github username?',
        name:'github',
        validate: (value)=> {if(value){return true}else{return "i need a value to continue"}}
      },
      {
        type:'input',
        message:'email address?',
        name:'email',
        validate: (value)=> {if(value){return true}else{return "i need a value to continue"}}
      },
      {
        type:'input',
        message:'linkedIn?',
        name:'link',
        validate: (value)=> {if(value){return true}else{return "i need a value to continue"}}
      }
    ]
)

// create functino to write readme file
function writeTofile(fileName, data) {}

//create function to init app
function init() {}

//function call to init app
init();