export default function Home() {
  return (
    <main>

      <section className="home">
        <h1 className="title">Bem-Vindo ao Mental Help</h1>
        <p className="subtitle">Nós iremos ajudar você a encontrar os maneiras de melhorar sua Mental Help</p>
        <div>
          <button className="cta">
            <span>Bora Lá</span>
            <svg viewBox="0 0 13 10" height="10px" width="15px">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
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
            <p className="paragraph-border-top">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae a laudantium iure quidem ex nemo magni commodi sapiente error sint, explicabo odit, tempora dignissimos alias id sunt consequatur aliquid.
            </p>
          </div>
          <div>
            <button className="purple_btn">
              Ver mais sobre Saúde Mental
            </button>
          </div>
        </section>

        <section className="bg-main">
          <div>
            <img src="https://www.asianmhc.org/wp-content/uploads/2021/07/amhc_illustration.png" className="image-section"/>
          </div>
        </section>
      </div>
    </main>
  )
}