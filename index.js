const TelegramBot = require("node-telegram-bot-api");

const token = "i'm-a-token";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
    try {
        await bot.deleteMessage(msg.chat.id, msg.message_id);
    } catch (error) {
        console.log(error);
    }
});
