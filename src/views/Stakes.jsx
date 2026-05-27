import styles from './Stakes.module.css'

const beliefs = [
  {
    title: 'IA como ferramenta de aprendizado',
    text: 'Sempre uso inteligência artificial com mentalidade de aluno, tanto na teoria quanto na prática. Não como atalho, mas como forma de entender melhor a situação e aumentar a produtividade com consciência.',
  },
  {
    title: 'Construir para aprender',
    text: 'A melhor forma de aprender algo é construindo algo real com isso. Teoria sem prática é ruído. Prática sem teoria é sorte.',
  },
  {
    title: 'Simplicidade deliberada',
    text: 'Complexidade desnecessária é o maior inimigo de um sistema. A solução mais simples que funciona é quase sempre a melhor.',
  },
  {
    title: 'Organização é relevante',
    text: 'Seja no código, na arquitetura ou na vida: quando as coisas estão organizadas, fica mais fácil de entender, de manter e de evoluir. Organização não é perfeccionismo, é respeito pelo que vem depois.',
  },
  {
    title: 'Errar é humano',
    text: 'Errar é normal e não é o problema. O importante é o que você faz depois. Ter a mentalidade de reiniciar quando algo não dá certo. Isso é persistência. Isso é disciplina.',
  },
]

export default function Stakes() {
  return (
    <section id="stakes" className={styles.section}>
      <div className="container">
      <div className={styles.header}>
        <span className={styles.tag}>04 — Stakes</span>
        <h2>No que acredito</h2>
      </div>

      <div className={styles.grid}>
        {beliefs.map((b, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.number}>{String(i + 1).padStart(2, '0')}</span>
            <div>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
