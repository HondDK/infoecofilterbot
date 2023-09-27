import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import { generateResponse } from "./gpt/openAi";
import { findWord } from "./helpers/findWord";
import { GANDONE_STICKER, PHOTO_CLOWN } from "./const/const";
import { message } from 'telegraf/filters';
import { FmtString } from 'telegraf/format';

dotenv.config();

const bot = new Telegraf( process.env.TOKEN!);

bot.on('message', async (ctx) => {
    if(ctx.has(message('text'))){
    if (findWord('гандон', ctx.update.message.text)) {
        await ctx.replyWithSticker(GANDONE_STICKER);
    }
    if (findWord('сухов', ctx.update.message.text)) {
        await  ctx.reply('Чухов');
        await ctx.replyWithSticker(PHOTO_CLOWN);
    }

    const userMessage = ctx.update.message.text;
    if (findWord('артем', userMessage)) {
        if (!userMessage || userMessage.trim() === '') {
            await   ctx.reply('Введите валидное сообщение.');
        } else {
            const openaiResponse = generateResponse(userMessage);
            await ctx.reply(await openaiResponse as any);
        }
    }
    }
});
bot.catch(err => {
    console.log(err)
});

bot.launch();
