import React from 'react'

const page = () => {
  return (
    <div>
      <section className='main-section'>
        <div className='flex-div card1-health'>
          <div>
            <img src="/assets/images/undraw_medicine_b-1-ol.svg" className='bgImg' alt="Foto" />
          </div>
          <div className='card-section margin-left'>
            <h1 className='title'>
              Tenha uma Rotina Saúdavel
            </h1>
            Manter hábitos saudáveis, momentos de diversão e exercícios físicos são aliados importantes de uma saúde mental em dia. A partir deste fato, surge a necessidade de manter um cronograma de atividades do dia para diminuir o estresse e a ansiedade, assim, resultando em uma melhor saúde mental.
          </div>
        </div>

        <div className='flex-div card2-health'>
          <div className='card-section margin-right'>
            <h1 className='title'>
              Impactos da Tecnologia
            </h1>
            Há uma relação entre o uso excessivo das redes sociais, jogos muito violentos e séries com o surgimento de sintomas de ansiedade patológica, depressão e privação do sono. Na fase da juventude, o uso excessivo da tecnologia afeta o desenvolvimento e faz perder outras experiências sociais importantes.
          </div>
          <div>
            <img src="/assets/images/undraw_messaging_re_pgx8.svg" className='bgImg' alt="Foto" />
          </div>
        </div>

      </section>
    </div>
  )
}

export default page