import styles from './Roadmap.module.css'

const items = [
  {
    period: 'Jan 2022 — Dez 2023',
    label: 'Concluído',
    title: 'Especialista em Produção',
    company: 'Gramim · Presencial',
    desc: 'Atendimento ao cliente na escolha de materiais, medições e orçamentos no local, processamento de mármores e granitos, instalação de bancadas, pisos e revestimentos, além de manutenção e reparos em superfícies.',
    done: true,
  },
  {
    period: 'Jan 2024 — Mar 2025',
    label: 'Concluído',
    title: 'Analista de Projetos',
    company: 'Gramim · Remota · Meio período',
    desc: 'Análise de projetos arquitetônicos e elaboração de FDO (Folha de Orçamento). Foco principal em B2B com forte demanda de construtoras, exigindo atenção aos detalhes, negociação e habilidades analíticas.',
    done: true,
  },
  {
    period: 'Mar 2025 — Abr 2025',
    label: 'Concluído',
    title: 'Analista de Sistemas',
    company: 'Brobot · Híbrida',
    desc: 'Mapeamento de sistemas públicos de multas e débitos: DETRAN, SEFAZ, ANTT, IBAMA e Receita Federal, identificando estrutura de dados, endpoints e informações necessárias para integração com o sistema interno da empresa.',
    done: true,
  },
  {
    period: 'Objetivo',
    label: 'Sonho',
    title: 'Engenheiro de Software',
    company: 'Spotify',
    desc: 'Trabalhar em uma empresa que genuinamente transforma a forma como as pessoas se relacionam com a música e a cultura. Na minha percepção, o Spotify é uma empresa que faz diferença real para a sociedade.',
    done: false,
  },
]

export default function Roadmap() {
  return (
    <section id="roadmap" className={styles.section}>
      <div className="container">
      <div className={styles.header}>
        <span className={styles.tag}>06 — Roadmap</span>
        <h2>Para onde vou</h2>
      </div>

      <div className={styles.timeline}>
        {items.map((item, i) => (
          <div key={i} className={`${styles.item} ${item.done ? styles.done : ''}`}>
            <div className={styles.meta}>
              <span className={styles.period}>{item.period}</span>
              <span className={styles.label}>{item.label}</span>
            </div>
            <div className={styles.connector}>
              <div className={styles.dot} />
              {i < items.length - 1 && <div className={styles.line} />}
            </div>
            <div className={styles.content}>
              <h3>{item.title}</h3>
              {item.company && <span className={styles.company}>{item.company}</span>}
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
