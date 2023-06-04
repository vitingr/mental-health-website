import Link from 'next/link'

const page = () => {
  return (
    <div>
      <section className='main-section'>
        <div className='glassmorphism'>
          <div className='flex-div'>
            <div className='welcome-background-div'>
              <img src="/assets/images/undraw_mindfulness_8gqa.svg" className='mdImg' alt="Foto" />
            </div>
          </div>
          <h1 className='title'>
            Que bom que você se interessou!
          </h1>

          <p className='paragraph-welcome'>
            Bem-vindo à nossa página dedicada à saúde mental e tecnologia nos dias atuais!
            Neste espaço, você encontrará uma abordagem inovadora e consciente sobre o impacto da tecnologia em nossa saúde mental. Nosso objetivo é explorar a intersecção entre a era digital e o bem-estar psicológico, fornecendo informações valiosas e recursos práticos para ajudar você a navegar por esse mundo cada vez mais conectado.
            Além disso, incentivamos você a participar ativamente desta comunidade. Compartilhe suas experiências, faça perguntas, encontre apoio e conexão com outras pessoas que também estejam interessadas em explorar o equilíbrio saudável entre a saúde mental e a tecnologia. Juntos, podemos construir uma compreensão mais profunda desse tema crucial e fortalecer nosso bem-estar coletivo.
          </p>

          <p className='paragraph-welcome'>
            Entendemos que, embora a tecnologia tenha trazido inúmeras vantagens e conveniências, também pode desencadear desafios únicos para nossa saúde mental. Nesta página, vamos mergulhar em tópicos relevantes, como o equilíbrio entre o uso da tecnologia e o autocuidado, os efeitos das redes sociais em nosso bem-estar emocional, a importância da desconexão digital e a gestão saudável do estresse relacionado ao mundo digital.
            Nossa equipe de especialistas em saúde mental e tecnologia está comprometida em fornecer informações baseadas em evidências e dicas práticas para ajudar você a aproveitar ao máximo as vantagens da tecnologia, ao mesmo tempo que preserva sua saúde mental e emocional. Aqui, você encontrará artigos informativos, guias de autocuidado, recomendações de aplicativos úteis e muito mais.
          </p>

          <p className='paragraph-welcome'>
            A saúde mental é uma jornada contínua, e estamos aqui para acompanhá-lo em cada passo do caminho. Seja bem-vindo à nossa comunidade dedicada à saúde mental e tecnologia nos dias atuais. Vamos explorar, aprender e crescer juntos!
            Lembre-se, você é mais do que apenas um usuário de tecnologia - sua saúde mental importa!
          </p>

          <div className='flex-div'>
            <button class="btn-section blue">
              Ver Artigos
            </button>
            <button class="btn-section blue">
              Mais Informações
            </button>
          </div>
        </div>

      </section>

    </div>
  )
}

export default page