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
		const response = await fetch("/api/posts")
		const data = await response.json()

		setPosts(data)
	}

	useEffect(() => {
		fetchPosts()
	}, [])

	return (
		<div className='feed'>
			<ListPosts data={posts} />
		</div>
	)
}

export default Feed