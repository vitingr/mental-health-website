import { connectToDB } from "@utils/database"
import Post from "@models/Post"

export const POST = async (request) => {
    const { userId, text } = await request.json()
    try {
        await connectToDB()
        const newPost = new Post({ creator: userId, text })
        await newPost.save()
        return new Response(JSON.stringify(newPost), { status: 201 })

    } catch (error) {
        return new Response(`Falhar ao criar o Post, ${error}`, { status: 500 })
    }
} 