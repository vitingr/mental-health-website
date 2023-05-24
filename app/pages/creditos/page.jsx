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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className="profile">
          <div>
            <img src="/assets/images/jean.png" />
          </div>
          <div>
            <h1>Jean Márcio Sátiro de Souza</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className="profile">
          <div>
            <img src="/assets/images/otavio.png" />
          </div>
          <div>
            <h1>Otavio Gomes Macedo Franca</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className="profile">
          <div>
            <img src="/assets/images/vitor.jpg" />
          </div>
          <div>
            <h1>Vitor Gabriel Silva</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default creditos