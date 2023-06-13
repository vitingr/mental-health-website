"use client"

import Link from "next/link"
import Feed from "@components/Feed"
import { useState, useEffect } from 'react'

export default function Home() {

	const [posts, setPosts] = useState([])

	const fetchPosts = async () => {
		const response = await fetch("/api/posts")
		const data = await response.json()

    console.log(data)
		setPosts(data)
    console.log(posts)
	}

	useEffect(() => {
		console.log("A")
		fetchPosts()
	}, [])

  return (
    <main>

      <section className="home">
        <h1 className="title">Bem-Vindo ao Mental Help</h1>
        <p className="subtitle">Nós iremos ajudamos você a conciliar sua saúde mental com a tecnologia de uma maneira eficiente.</p>
        <div>
          <Link href="/pages/help">
            <button className="cta">
              <span>Bora Lá</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </Link>
        </div>
      </section>

      <div className="content">
        <div className="custom-shape-divider-bottom-1684278806">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
        </div>
        <section className="bg-main">
          <div>
            <p className="paragraph border-top">
              Nos dias atuais, a interseção entre tecnologia e saúde mental tem sido um tema de grande relevância. Com o avanço tecnológico, surgiram novas oportunidades e desafios relacionados à saúde mental. Por um lado, a tecnologia tem desempenhado um papel fundamental no acesso à informação, fornecendo recursos valiosos para o autocuidado e a busca por apoio psicológico. Plataformas online e dispositivos vestíveis têm facilitado os a indivíduos monitorem sua saúde mental e adotem práticas de bem-estar.
            </p>
          </div>
          <div>
            <Link href="/pages/technology">
              <button className="purple_btn">
                Quero saber mais
              </button>
            </Link>
          </div>
        </section>

        <section className="bg-main">
          <div className='flex-div'>

            <div>
              <p className="paragraph low-width">
                Há uma relação entre o uso excessivo das redes sociais, jogos muito violentos e séries com o surgimento de sintomas de ansiedade patológica, depressão e privação do sono. Na fase da juventude, o uso excessivo da tecnologia afeta o desenvolvimento e faz perder outras experiências sociais importantes.
              </p>
            </div>
            <div>
              <img src="https://www.asianmhc.org/wp-content/uploads/2021/07/amhc_illustration.png" className="image-section" />
            </div>
          </div>
        </section>

        <section className="bg-main">
          <div className="flex-div">
            <Feed postsData={posts} />
          </div>
        </section>
      </div>
    </main>
  )
}