import { connectToDB } from "@utils/database"
import Post from "@models/Post"

export const POST = async (request) => {
    console.log("A")
    const { userId, text } = await request.json()
    console.log("B")
    try {
        console.log("C")
        await connectToDB()
        console.log("D")
        const newPost = new Post({ creator: userId, text })
        console.log("E")
        await newPost.save()
        console.log("F")
        return new Response(JSON.stringify(newPost), { status: 201 })

    } catch (error) {
        return new Response(`Falhar ao criar o Post, ${error}`, { status: 500 })
    }
} 