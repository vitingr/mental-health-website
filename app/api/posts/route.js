import { connectToDB } from "@utils/database";
import Post from "@models/Post";

export const GET = async (request) => {
    try {
        await connectToDB()

        const posts = await Post.find({}).populate('creator')
        return new Response(JSON.stringify(posts), {status: 200})

    } catch (error) {
        return new Response(`Falha ao fazer o Fetch dos Posts baby, ${error}`, {status: 500})
    }
    
}