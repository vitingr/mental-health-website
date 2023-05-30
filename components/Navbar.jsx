import React from 'react'

const Navbar = () => {
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