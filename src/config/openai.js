const { Configuration, OpenAIApi } = require("openai");


const openai = new OpenAIApi(configuration);

module.exports = class OpenAI {
  static configuration() {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });

    return new OpenAIApi(Configuration)

  }

  static textCompletation({ prompt }) {

    return {
      model: "text-davinci-003",
      prompt: `${prompt}`,
      temperature: 0,
      max_tokens: 3500,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    };
  }
}



// const response = await openai.createCompletion();