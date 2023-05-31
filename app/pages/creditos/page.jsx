import React from 'react'

const creditos = () => {
  return (
    <div className='creditos'>
      <h1 className='title'>Créditos</h1>
      <section className='glassmorphism'>

        <div className="profile">
          <div>
            <img src="/assets/images/brenda.png" />
          </div>
          <div>
            <h1>Brenda Eduarda Paulino de França</h1>
            <p>Pesquisas, Planejamento e Desenvolvimento do Projeto.</p>
          </div>
        </div>

        <div className="profile">
          <div>
            <img src="/assets/images/jean.png" />
          </div>
          <div>
            <h1>Jean Márcio Sátiro de Souza</h1>
            <p>Líder do Grupo, UI/UX Designer, Suporte Técnico e Apresentador.</p>
          </div>
        </div>

        <div className="profile">
          <div>
            <img src="/assets/images/otavio.png" />
          </div>
          <div>
            <h1>Otavio Gomes Macedo Franca</h1>
            <p>Suporte e Analista de Desenvolvimento do Projeto.</p>
          </div>
        </div>

        <div className="profile">
          <div>
            <img src="/assets/images/vitor.jpg" />
          </div>
          <div>
            <h1>Vitor Gabriel Silva</h1>
            <p>Auxiliar e Desenvolvedor do Frontend do Website referente ao PWI.</p>
          </div>
        </div>

      </section>
    </div>
  )
}

export default creditos