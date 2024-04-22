import { Telegraf } from 'telegraf';
import dotenv from 'dotenv';
import { generateResponse } from "./gpt/openAi";

dotenv.config();
const bot = new Telegraf( process.env.TOKEN!);

const replyToMessage = async (ctx: any) => {
    if (ctx.message && ctx.message.text) {
      const userMessage = ctx.update.message.text;

      const openaiResponse = generateResponse(userMessage);
                await ctx.reply(await openaiResponse as any, { reply_to_message_id: ctx.message.message_id });
        }
}

bot.on('message', replyToMessage)

bot.catch(err => {
    console.log(err)
});

bot.launch()