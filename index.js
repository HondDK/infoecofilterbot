import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import { generateResponse } from "./openAi.js";
dotenv.config();

const bot = new Telegraf(process.env.TOKEN);
const GANDONE_STICKER = 'CAACAgIAAxkBAAEKZHplElHPX99-Qj3MTS3r0O2cule--gACCiYAArkQaEksYoQTtEf5LTAE';
const PHOTO_CLOWN = 'CAACAgIAAxkBAAEKZLBlEo0-GulfMbwhRgEW7is2Nxc23gACcCgAAkiP6UkBU4BvBnBFWDAE';


function findWord(word, str) {
    if (typeof str !== 'string') {
        str = '';
    }
    return str.toLowerCase().includes(word);
}


bot.on('message', async (ctx) => {
    if (findWord('гандон', ctx.update.message.text)) {
        ctx.replyWithSticker(GANDONE_STICKER);
    }
    if (findWord('сухов', ctx.update.message.text)) {
        console.log(ctx.update.message.text);
        ctx.reply('Чухов');
        ctx.replyWithSticker(PHOTO_CLOWN);
    }

    const userMessage = ctx.update.message.text;
    if (findWord('артем', ctx.update.message.text)) {
        if (!userMessage || userMessage.trim() === '') {
            ctx.reply('Please enter a valid message.');
        } else {
            const openaiResponse = await generateResponse(userMessage);
            ctx.reply(openaiResponse);
        }
    }


});


bot.launch();
