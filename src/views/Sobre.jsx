import foto from '../assets/camisa_cinza.jpeg'
import RmLogo from '../assets/rm.svg?react'
import styles from './Sobre.module.css'

export default function Sobre() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.hero}>
        <RmLogo className={styles.bgLogo} />
        <div className="container">
          <div className={styles.content}>
            <div className={styles.photoOuter}>
              <div className={styles.photoWrapper}>
                <img src={foto} alt="Renan Marques" className={styles.photo} />
                <div className={styles.photoOverlay} />
              </div>
              <div className={styles.orbit}>
                <RmLogo width="80" height="80" className={styles.orbitLogo} />
              </div>
            </div>
            <div className={styles.text}>
              <h1>Renan Marques</h1>
              <p className={styles.role}>Desenvolvedor de Software</p>
              <p className={styles.bio}>
                24 anos, nascido e criado em Guarulhos, hoje em Araras. Sonho com praia todo mês, um Maverick 73 e a vida boa ao lado de quem amo. Profissionalmente, quero deixar minha marca. Construir algo que o mundo sinta.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.razao}>
        <div className="container">
          <h2 className={styles.razaoTitle}>
            A razão de <em>ser</em>
          </h2>

          <p className={styles.ikigaiResumo}>
            Conhecimento é o que me move. Família é o que me sustenta. Tecnologia é o meio que escolhi para deixar algo no mundo.
          </p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <span className={styles.cardLabel}>Pessoal</span>
              <p>Família, música, leitura e viagens. Sou grato pelas minhas raízes. É delas que vem tudo. Conhecimento é um dos valores mais importantes que carrego.</p>
            </div>
            <div className={styles.card}>
              <span className={styles.cardLabel}>Profissional</span>
              <p>Construir produtos que fazem diferença real. Me comunico bem, lidero com propósito e entendo o negócio além do código. Não sou perfeito, sou humano. E são os erros que geram experiência e te levam longe.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
