import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import { generateResponse } from "./gpt/openAi";
import { findWord } from "./helpers/findWord";
import { GANDONE_STICKER } from "./const/const";

dotenv.config();
const bot = new Telegraf( process.env.TOKEN!);

const replyToMessage = async (ctx: any) => {
    if (ctx.message && ctx.message.text) {
        if (findWord('гандон', ctx.message.text)) {
            await ctx.replyWithSticker(GANDONE_STICKER);
        }

        const userMessage = ctx.message.text;
        if (findWord('бобр', userMessage)) {
            if (!userMessage || userMessage.trim() === '') {
                await ctx.reply('Введите валидное сообщение.');
            } else {
                const openaiResponse = generateResponse(userMessage);
                await ctx.reply(await openaiResponse as any, { reply_to_message_id: ctx.message.message_id });
            }
        }
    }

    if (ctx.message && ctx.message.reply_to_message && ctx.message.reply_to_message.from.id === ctx.botInfo.id) {
        const userMessage = ctx.message.text;
        const openaiResponse = generateResponse(userMessage);
        await ctx.reply(await openaiResponse as any, { reply_to_message_id: ctx.message.message_id });
    }

}
const memberJoinChat = async (ctx: any) => {
        const userWhoJoin = ctx.message.new_chat_members;
        await ctx.reply(`${userWhoJoin.first_name} ${userWhoJoin ? userWhoJoin.last_name : ''} бобер.`);
}

const memberLeaveChat = async (ctx: any) => {
        const userWhoLeft = ctx.message.left_chat_member;
        await ctx.reply(`${userWhoLeft.first_name} ${userWhoLeft ? userWhoLeft.last_name : ''} пошел нахуй.`);
}


bot.on(['message', 'left_chat_member', 'new_chat_members'], replyToMessage)
bot.on('left_chat_member', memberLeaveChat)
bot.on('new_chat_members', memberJoinChat)

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