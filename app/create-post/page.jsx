"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";

const CreatePost = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({ text: "" });

  const createPost = async (e) => {
    
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("/api/posts/new", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user.id,
          text: post.text
        }),
      }); // Aqui vai realizar o POST

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form 
      type='Criar'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPost}
    />
  );
};

export default CreatePost;
