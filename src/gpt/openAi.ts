import openai from 'openai'; // Import the OpenAI library
import dotenv from 'dotenv';
dotenv.config();
const openaiClient = new openai({ apiKey: process.env.OPENAI_API_KEY });

export async function generateResponse(userMessage) {
    try {
        console.log(userMessage)
        const response = await openaiClient.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: "system", content: "Представь что ты Артем, 20 лет, живешь в Алмате, работаешь бекенд программистом в рбк банке. Общайся как быдло и используй много русского мата." },
                { role: "user", content: userMessage } // Use the user's message here
            ],

        });

        return response.choices[0].message.content;
    } catch (error) {
        console.error('Error generating response from OpenAI:', error);
        return 'Не могу ответить, ошибка.';
    }
}