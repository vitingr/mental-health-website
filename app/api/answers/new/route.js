import { connectToDB } from "@utils/database"
import Answer from "@models/Answer"

export const POST = async (request) => {
    const { userId, question, text } = await request.json()
    try {

        await connectToDB()

        const newAnswer = new Answer({ creator: userId, question, text })
        try {
            await newAnswer.save()
        } catch (error) {
            console.log(error)
        } finally {
            console.log("OK")
        }
        
        return new Response(JSON.stringify(newAnswer), { status: 201 })

    } catch (error) {
        return new Response(`Falhar ao criar a resposta, ${error}`, { status: 500 })
    }
} 