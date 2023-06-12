"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

import React from 'react'

const Navbar = () => {

  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);

  useEffect(() => {

    const setUpProviders = async () => {
      const response = await getProviders()

      setProviders(response) // Só pode ter um setProviders

    }

    setUpProviders()

  }, [])

  return (
    <header>

      <nav>
        <ul className="nav-list">
          <li><Link href="/" className="link-nav">Início</Link></li>
          <li><Link href="/pages/welcome" className="link-nav">Bem-Vindo</Link></li>
          <li><Link href="/pages/help" className="link-nav">Ajuda Pessoal</Link></li>
          <li><Link href="/pages/healthLife" className="link-nav">Vida Saudável</Link></li>
          <li><Link href="/pages/technology" className="link-nav">Tecnologia</Link></li>
          <li><Link href="/pages/creditos" className="link-nav">Quem Somos?</Link></li>
          <div className="nav-actions">
            {session?.user ? (
              <div className="nav-actions">
                <Link href="/pages/create-post" className="sign-in-out">
                  Publicar
                </Link>

                <button type="button" className="sign-in-out" onClick={signOut}>
                  Sign Out
                </button>

                <Image src={session?.user.image} width={50} height={50} className="rounded-profile-photo" alt="Profile Photo" />
              </div>
            ) : (
              <>
                {providers &&
                  Object.values(providers).map((provider) => (
                    <button type="button" key={provider.name} onClick={() => signIn(provider.id)} className="sign-in-out">
                      Sign In
                    </button>
                  ))}
              </>
            )}
          </div>

        </ul>
      </nav>
    </header>

  )
}

export default Navbar