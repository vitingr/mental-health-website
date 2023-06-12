import { connectToDB } from "@utils/database";
import Answer from "@models/Answer";

export const GET = async (request) => {
    try {
        await connectToDB()

        const answers = await Answer.find({}).populate('question')
        return new Response(JSON.stringify(answers), {status: 200})

    } catch (error) {
        return new Response(`Falha ao fazer o Fetch das respostas, ${error}`, {status: 500})
    }
    
}