import { Telegraf  } from 'telegraf';
import dotenv from 'dotenv';
import { generateResponse } from "./gpt/openAi";
import { findWord } from "./helpers/findWord";
import { GANDONE_STICKER } from "./const/const";
import { message } from 'telegraf/filters';

dotenv.config();
const bot = new Telegraf( process.env.TOKEN!);

bot.on('message', async (ctx: any) => {
    if(ctx.has(message('text'))){
    if (findWord('гандон', ctx.update.message.text)) {
        await ctx.replyWithSticker(GANDONE_STICKER);
    }


    const userMessage = ctx.update.message.text;
    if (findWord('бобр', userMessage)) {
        if (!userMessage || userMessage.trim() === '') {
            await ctx.reply('Введите валидное сообщение.');
        } else {
            const openaiResponse = generateResponse(userMessage);
            await ctx.reply(await openaiResponse as any ,  {reply_to_message_id: ctx.message?.message_id});
        }
    }
    }
    if (ctx.has(message('reply_to_message' ))){
        if (ctx.message.reply_to_message && ctx.message.reply_to_message.from.id === ctx.botInfo.id) {
            const userMessage = ctx.update.message.text;
                const openaiResponse = generateResponse(userMessage);
                await ctx.reply(await openaiResponse as any ,  {reply_to_message_id: ctx.message?.message_id})
        }
    }
});

bot.on('left_chat_member', async (ctx: any) => {
    const userWhoLeft = ctx.message.left_chat_member;

    ctx.reply(`Пользователь ${userWhoLeft.first_name} ${userWhoLeft.last_name} идет нахуй.`);


});

// bot.on('channel_post', (ctx: any) => {
//     const channelPost = ctx.update.channel_post;
//     const channelId = channelPost.chat.id;
//     const openaiResponse = generateResponse(channelPost.text);
//     bot.telegram.sendMessage(channelId, openaiResponse as any, {
//         reply_to_message_id: channelPost.message_id,
//     })
// });

bot.catch(err => {
    console.log(err)
});

bot.launch()