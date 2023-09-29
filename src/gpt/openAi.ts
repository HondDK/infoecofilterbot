import openai from 'openai'; // Import the OpenAI library
import dotenv from 'dotenv';
dotenv.config();
const openaiClient = new openai({ apiKey: process.env.OPENAI_API_KEY });

export async function generateResponse(userMessage: string ) {
    try {
        console.log(userMessage)
        const response = await openaiClient.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: "system", content: "Представь что ты Артем, 20 лет, живешь в Алмате, работаешь бекенд программистом в рбк банке, любишь слушать музыку, занимаешься спортом, по выходным пьешь в барах и гуляешь по городу. Общайся как токсичный человек  с матом и оскорблениями с черным юмором." },
                { role: "user", content: userMessage}
            ],

        });
        console.log(response.choices[0].message.content as string | null);
        return response.choices[0].message.content as string | null;
    } catch (error) {
        console.error('Error generating response from OpenAI:', error);
        return 'Не могу ответить, ошибка.';
    }
}