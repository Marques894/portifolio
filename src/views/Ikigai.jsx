import styles from './Ikigai.module.css'

export default function Ikigai() {
  return (
    <section id="ikigai" className={styles.section}>
      <div className="container">
      <div className={styles.inner}>
      <div className={styles.left}>
        <div className={styles.venn}>
          <div className={`${styles.circle} ${styles.love}`}>
            <span className={styles.label}>O que você<br />ama</span>
          </div>
          <div className={`${styles.circle} ${styles.good}`}>
            <span className={styles.label}>Bom em<br />fazer</span>
          </div>
          <div className={`${styles.circle} ${styles.need}`}>
            <span className={styles.label}>O que o mundo<br />precisa</span>
          </div>
          <div className={`${styles.circle} ${styles.paid}`}>
            <span className={styles.label}>Pago para<br />fazer</span>
          </div>
          <span className={styles.center}>Ikigai</span>
        </div>
      </div>

      <div className={styles.right}>
        <h2 className={styles.title}>
          A razão de <em>ser</em><br />no trabalho
        </h2>
        <p className={styles.desc}>
          Ikigai é um conceito japonês que representa a intersecção entre o que
          você <strong>ama</strong>, no que é <strong>bom</strong>, o que o mundo{' '}
          <strong>precisa</strong> e pelo que podem te <strong>pagar</strong>. É
          onde propósito e sustento se encontram.
        </p>
        <p className={styles.desc}>
          Para mim, isso se manifesta em construir ferramentas e sistemas que
          resolvem problemas reais, usando tecnologia como meio — não como fim.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <span className={styles.cardLabel}>Amo</span>
            <p>Criar produtos, resolver problemas complexos, aprender coisas novas continuamente</p>
          </div>
          <div className={styles.card}>
            <span className={styles.cardLabel}>Sou bom em</span>
            <p>Programação, arquitetura de sistemas, design de interfaces e soluções</p>
          </div>
          <div className={styles.card}>
            <span className={styles.cardLabel}>Mundo precisa</span>
            <p>Soluções digitais acessíveis, automação inteligente, UX com propósito</p>
          </div>
          <div className={styles.card}>
            <span className={styles.cardLabel}>Pago por</span>
            <p>Desenvolvimento, consultoria técnica, projetos freelance e produtos</p>
          </div>
        </div>
      </div>
      </div>
      </div>
    </section>
  )
}
