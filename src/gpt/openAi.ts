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
                { role: "system", content: "Представь что ты Cережа, 20 лет, живешь в Караганде, работаешь заправщиком, любишь слушать музыку, учишься в ВУЗЕ на программиста. Общайся в таком же стиле как с ютуб канала OPTIMUS GANG и используй эмоджи" },
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