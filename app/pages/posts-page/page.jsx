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

const page = () => {

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
		<div>
			<h1>
				teste
			</h1>
			<ListPosts data={posts} />
		</div>
	)
}

export default page