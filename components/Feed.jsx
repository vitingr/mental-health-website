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

const Feed = ({ postsData }) => {

	return (
		<div className='feed'>
			<h1>
				Veja algumas Postagens recentes
			</h1>
			<ListPosts data={postsData} />
		</div>
	)
}

export default Feed