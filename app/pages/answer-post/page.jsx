"use client"


import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form"

const page = () => {

    const { data: session } = useSession()
    const router = useRouter();
    const searchParams = useSearchParams()
    const postId = searchParams.get('id') // Vai buscar o parametro ID na rota

    const [submitting, setSubmitting] = useState(false);
    const [answer, setAnswer] = useState({ question: "", text: "" });

    useEffect(() => {
        const getPostDetails = async () => {
            const response = await fetch(`/api/posts/${postId}`)
            const data = await response.json()

            setAnswer({
                question: data._id,
                text: data.text
            })
        }

        if (postId) {
            getPostDetails()
        }
    }, [postId])

    // Editar Prompt
    const answerPost = async (e) => {

        console.log(session?.user)
        console.log(answer.question)
        console.log(answer.text)
        e.preventDefault();
        setSubmitting(true);

        if (!postId) {
            return alert("Post ID não encontrado!")
        }

        try {
            const response = await fetch(`/api/answers/new`, {
                method: "POST",
                body: JSON.stringify({
                    userId: session?.user.id,
                    question: answer.question,
                    text: answer.text,
                }),
            });
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
        <div>
            <Form type="Responder" post={answer} setPost={setAnswer} submitting={submitting} handleSubmit={answerPost} />
        </div>
    )
}

export default page