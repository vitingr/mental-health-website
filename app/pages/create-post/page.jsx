"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import Form from "@components/Form"

const page = () => {

	const router = useRouter()
	const { data: session } = useSession()

	const [submitting, setSubmitting] = useState(false)
	const [post, setPost] = useState({ post: "" })

	// Funçao Criar Post

	const createPost = async (e) => {
		e.preventDefault()
		setSubmitting(true)

		try {
			const response = await fetch("/api/posts/new", {
				method: "POST",
				body: JSON.stringify({
					text: post.text,
					userId: session?.user.id,
				})
			})

			if (response.ok) {
				router.push("/")
			}
			
		} catch (erro) {
			console.log(erro)
		} finally {
			setSubmitting(false)
		}
	}

	return (
		<div>
			<Form type="Postar" post={post} setPost={setPost} submitting={submitting} handleSubmit={createPost} />
		</div>
	)
}

export default page
