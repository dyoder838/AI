require('dotenv').config();
const inquirer = require('inquirer');
const { OpenAI } = require('langchain/llms/openai');

// connection to openAI API
const model = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0,
  model: 'gpt-3.5-turbo'
});


// API input function
const promptFunc = async (input) => {

  try {
    const res = await model.call(input);
    console.log(res);
  }
  catch (err) {
    console.log(err);
  }
};


// inquirer prompt
const init = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Ask a question',
    },

  ]).then((inquirerResponse) => {
    promptFunc(inquirerResponse.name)
  });
};

// initialize the script
init();