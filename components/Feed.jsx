"use client"

import { useState, useEffect } from 'react'
import Post from "@components/Post"

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
		console.log("A")
		const response = await fetch("/api/posts")
		console.log("A")
		const data = await response.json()

		console.log("A")
		setPosts(data)
	}

	useEffect(() => {
		console.log("A")
		fetchPosts()
	}, [])

	return (
		<div className='feed'>
			<h1>
				Veja algumas Postagens recentes
			</h1>
			<ListPosts data={posts} />
		</div>
	)
}

export default Feed