const openai = require('../config/openai');
const InputPrompt = require('../models/input-prompt');
const inputPrompt=require("../models/input-prompt")

module.exports = {
    async sendText(req, res) {
        const openAIApi = openai.configuration();
        const inputModel=new InputPrompt(req.prompt)
        try {
            const response = await openAIApi.createCompletion(openai.textCompletation(inputModel))
            return res.status(200).json({
                success: true, data: response.data.choices[0]
            })
        } catch (error) {
            return res.status(400).json({
                success: false,
                error: error.response ? console.error.response : "There was an issue on the server"
            });
        }
    }
}