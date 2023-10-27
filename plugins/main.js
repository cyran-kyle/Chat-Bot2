const { command, isPrivate } = require("../lib/");
const responses = require("./responses.json"); // Replace with the correct path to your JSON file

command({
    pattern: "chatbot", 
    fromMe: false,
    desc: "chat bot", 
    type: "user", 
  },
  async (message, match) => {
    await message.sendMessage("_Chat bot is activated_");

    command({
        on: "text",
        fromMe: false,
    },
    async (message, match, m) => {
        match = match || message.text;
        // Check if the match is in the JSON file
        if (responses[match]) {
            await message.sendMessage(responses[match]);
        } else {
            // If not found, provide a default response
            await message.sendMessage("Sorry, I don't understand that.");
        }
    });
});
