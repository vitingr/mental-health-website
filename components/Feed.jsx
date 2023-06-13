"use client"

import { useState, useEffect } from 'react'
import Post from "@components/Post"
import Link from 'next/link'

const ListPosts = ({ data }) => {
	return (
		<div className='post-container'>
			{data.map((post) => (
				<Post key={post._id} post={post} />
			))}
		</div>
	)
}

const Feed = () => {

	const [posts, setPosts] = useState([])

	const fetchPosts = async () => {
		const response = await fetch("/api/posts")
		const data = await response.json()

		setPosts(data)
	}

	useEffect(() => {
		fetchPosts()
	}, [])

	console.log(`POSTS ${posts}`)
	return (
		<div className='feed'>
			<h1>
				Veja algumas Postagens recentes
			</h1>
			<ListPosts data={posts} />
			<Link href="/pages/posts-page">
				<button class="cssbuttons-io-button"> Ver outras Postagens
					<div class="icon">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
					</div>
				</button>
			</Link>
		</div>
	)
}

export default Feed