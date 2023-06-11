import { connectToDB } from "@utils/database"
import Post from "@models/Post"

// GET (read)
export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const posts = await Post.findById(params.id).populate('creator')

        if (!posts) {
            return new Reponse("posts não encontrado!", { status: 404 })
        }
        return new Response(JSON.stringify(posts), { status: 200 })

    } catch (error) {
        return new Response("Falha ao fazer o Fetch/GET dos Posts", { status: 500 })
    }
}

// PATCH (update)
export const PATCH = async (request, {params}) => {
    const {text} = await request.json()

    try {
        await connectToDB()

        const existingPosts = await Post.findById(params.id)

        if (!existingPosts) {
            return new Reponse("Posts não encontrado!", {status: 404})
        }

        existingPosts.text = text

        await existingPosts.save()
        return new Response(JSON.stringify(existingPosts), { status: 200 })

    } catch (error) {
        return new Response(`Falha ao fazer o Update dos Posts, ${error}`, { status: 500 })
    }
}

// DELETE (delete)
export const DELETE = async (request, {params}) => {

    try {
        
        await connectToDB()

        await Post.findByIdAndRemove(params.id)
        return new Response("Post Deletado com sucesso!", {status: 200})

    } catch (error) {
        return new Response("Falha ao fazer o Delete dos Posts", { status: 500 })
    }

}