"use client"

import Image from "next/image"
import { useSession } from "next-auth/react"
import { usePathname, useRouter } from "next/navigation"

const Post = ({ post, handleEdit, handleDelete }) => {

	const { data: session } = useSession()
	const pathName = usePathname()
	const router = useRouter()

	const answer = (post) => {
		router.push(`/pages/answer-post?id=${post}`)
	}

	return (
		<div className="post-card" key={post._id}>
			<div className="post-creator">
				<Image src={post.creator.image} alt="Foto Perfil" width={40} height={40} className="rounded-profile-photo" />
				<div className="post-creator-info">
					<h3>
						{post.creator.username}
					</h3>
					<p>
						{post.creator.email}
					</p>
				</div>
			</div>
			<div className="post-info">
				<p>
					{post.text}
				</p>
			</div>
			<div className="post-actions">
				{session?.user.id === post.creator._id && pathName === "/" ?
					(
						<div>
							<p className="edit-post" onClick={handleEdit}>
								Editar
							</p>
							<p className="remove-post" onClick={handleDelete}>
								Remover
							</p>
						</div>
					) : (
						<div>
							<p className="answer-post" onClick={() => answer(post._id)}>
								Responder
							</p>
						</div>
					)}

			</div>

		</div>
	)
}

export default Post