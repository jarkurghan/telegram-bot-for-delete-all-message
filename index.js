const TelegramBot = require("node-telegram-bot-api");

const token = "7166533715:AAHU8a0PDF60aD5EjCe-wY-genHMdzi75II";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
    try {
        await bot.deleteMessage(msg.chat.id, msg.message_id);
    } catch (error) {
        console.log(error);
    }
});
