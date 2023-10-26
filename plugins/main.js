const { command, isPrivate } = require("../lib/");

command({
    pattern: "chatbot", 
    fromMe: false,
    desc: "chat bot", 
    type: "user", 
  },
  async (message, match) => {
    await message.sendMessage("chat bot is actived");

    System({
        on: "text",
        fromMe: false,
    },
    async (message, match, m) => {
        match = match || message.text; 
        if (match === "hy") {
            await message.sendMessage("Hi, my friend!");
        } else if (match === "hi") {
            await message.sendMessage("Hi bro");
        }
    });
  });
