import styles from './Projetos.module.css'
import { SiReact, SiNodedotjs, SiPostgresql, SiTypescript, SiExpo, SiDjango, SiPython } from 'react-icons/si'

const techIcons = {
  'React':        { icon: SiReact,      color: '#61DAFB' },
  'React Native': { icon: SiReact,      color: '#61DAFB' },
  'Node.js':      { icon: SiNodedotjs,  color: '#68A063' },
  'PostgreSQL':   { icon: SiPostgresql, color: '#336791' },
  'TypeScript':   { icon: SiTypescript, color: '#3178C6' },
  'Expo':         { icon: SiExpo,       color: '#ffffff' },
  'Expo Go':      { icon: SiExpo,       color: '#ffffff' },
  'Django':       { icon: SiDjango,     color: '#44B78B' },
  'Python':       { icon: SiPython,     color: '#3776AB' },
}

const projects = [
  {
    tag: '01',
    name: 'Gramim',
    desc: 'Landing page para empresa do setor de marmoraria. Presença digital com foco em conversão e credibilidade.',
    stack: ['React', 'Node.js'],
    status: 'Ativo · gramim.com.br',
    link: 'https://gramim.com.br',
  },
  {
    tag: '02',
    name: 'Work Manage',
    desc: 'SaaS B2B para gestão e agendamento de pequenos negócios. Cuida da operação interna.',
    stack: ['Django', 'Python', 'PostgreSQL'],
    status: 'Em desenvolvimento',
  },
  {
    tag: '03',
    name: 'Service Manage',
    desc: 'Aplicativo para o cliente final agendar serviços e acompanhar tudo em um só lugar. Opera em rede com o Work Manage.',
    stack: ['React Native', 'Expo Go'],
    status: 'Em desenvolvimento',
  },
  {
    tag: '04',
    name: 'SmartMarket',
    desc: 'Aplicativo que reimagina a experiência de compra no varejo físico. Menos atrito, mais autonomia para o cliente.',
    stack: ['React Native', 'Expo', 'TypeScript'],
    status: 'Em desenvolvimento',
  },
]

export default function Projetos() {
  return (
    <section id="projetos" className={styles.section}>
      <div className="container">
      <div className={styles.header}>
        <span className={styles.tag}>03 — Projetos</span>
        <h2>O que construí</h2>
      </div>

      <div className={styles.grid}>
        {projects.map((p) => (
          <div key={p.tag} className={styles.card}>
            <span className={styles.cardTag}>{p.tag}</span>
            <div className={styles.cardBody}>
              <div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
              </div>
              <div className={styles.cardFooter}>
                <div className={styles.stack}>
                  {p.stack.map((t) => {
                    const tech = techIcons[t]
                    return (
                      <span key={t} className={styles.tech}>
                        {tech && <tech.icon className={styles.techIcon} style={{ color: tech.color }} />}
                        {t}
                      </span>
                    )
                  })}
                </div>
                {p.link
                  ? <a href={p.link} target="_blank" rel="noreferrer" className={styles.statusLink}>{p.status}</a>
                  : <span className={styles.status}>{p.status}</span>
                }
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
