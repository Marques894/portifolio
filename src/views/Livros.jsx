import styles from './Livros.module.css'
import dnaDoInovador from '../assets/dna_do_inovador.png'
import aMeninDoVale from '../assets/a_meninda_do_vale.png'
import aMenteDoEmpreendedor from '../assets/a_mente_do_empreendedor.png'
import universidadeMarketingDigital from '../assets/universidade_marketing_digital.png'

const books = [
  {
    title: 'DNA do Inovador',
    author: 'Jeff Dyer, Hal Gregersen & Clayton Christensen',
    takeaway: 'Inovação não é talento, é um conjunto de habilidades que podem ser desenvolvidas.',
    cover: dnaDoInovador,
    reading: true,
  },
  {
    title: 'A Menina do Vale',
    author: 'Bel Pesce',
    takeaway: 'Como o sonho americano me levou ao Vale do Silício.',
    cover: aMeninDoVale,
    done: true,
  },
  {
    title: 'A Mente do Empreendedor',
    author: 'Kevin D. Johnson',
    takeaway: 'Os 100 hábitos e comportamentos dos empresários mais bem-sucedidos do mundo.',
    cover: aMenteDoEmpreendedor,
    done: true,
  },
  {
    title: 'Universidade do Marketing Digital',
    author: 'Conrado Adolpho',
    takeaway: 'Como construir uma presença digital sólida e transformar marketing em resultado real.',
    cover: universidadeMarketingDigital,
    done: true,
  },
]

export default function Livros() {
  return (
    <section id="livros" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.tag}>05 — Livros</span>
          <h2>O que li</h2>
          <p className={styles.subtitle}>
            Livros que moldaram a forma como penso sobre software, negócios, aprendizado e a vida.
          </p>
        </div>

        <div className={styles.grid}>
          {books.map((b, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.coverWrapper}>
                {b.cover
                  ? <img src={b.cover} alt={b.title} className={styles.cover} />
                  : (
                    <div className={styles.placeholder}>
                      <span className={styles.spineBar} style={{ '--hue': `${(i * 44) % 360}` }} />
                    </div>
                  )
                }
              </div>
              <div className={styles.info}>
                {b.reading && <span className={styles.badge}>Lendo agora</span>}
                {b.done && <span className={styles.badgeDone}>Concluído</span>}
                <h3>{b.title}</h3>
                <span className={styles.author}>{b.author}</span>
                <p className={styles.takeaway}>{b.takeaway}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
