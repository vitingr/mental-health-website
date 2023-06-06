"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

const Navbar = () => {

  const {data: session} = useSession()

  const [ providers, setProviders ] = useState(null)
  const [toggleDropdown, setToggleDropdown] = useState(false)

  useEffect(() => {

    const setUpProviders = async () => {
      const response = await getProviders()

      setProviders(response)

    }

    setUpProviders()

  }, [])

  return (
    <header>
      <nav>
        <ul class="nav-list">
          <li><a href="/" class="link-nav">Início</a></li>
          <li><a href="/pages/welcome" class="link-nav">Bem-Vindo</a></li>
          <li><a href="/pages/healthLife" class="link-nav">Vida Saudável</a></li>
          <li><a href="/pages/help" class="link-nav">Ajuda Pessoal</a></li>
          <li><a href="/pages/technology" class="link-nav">Tecnologia</a></li>
          <li><a href="/pages/creditos" class="link-nav">Quem Somos?</a></li>
        </ul>
      </nav>
    </header>

  )
}

export default Navbar