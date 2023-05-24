import '@style/global.css'

import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

export const metadata = {
  title: 'Site PWI',
  description: 'Site desenvolvido pelo DS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className='bg'>
        <Navbar />
        {children}

        <Footer />
        <script src="../functions/reveal.js" defer></script>
        <script src="../functions/revealConfig.js" defer></script>
      </body>
    </html>
  )
}