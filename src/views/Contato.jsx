import styles from './Contato.module.css'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Contato() {
  return (
    <section id="contato" className={styles.section}>
      <div className="container">
      <div className={styles.inner}>
        <span className={styles.tag}>07 — Contato</span>
        <h2>Vamos construir<br />algo juntos</h2>
        <p className={styles.desc}>Aberto a propostas CLT e PJ.</p>
        <p className={styles.desc}>Disposto a análise de projetos e conversas sobre produto, tecnologia e negócios.</p>

        <a href="mailto:renanmarques894@gmail.com" className={styles.emailBtn}>
          renanmarques894@gmail.com
        </a>

        <div className={styles.links}>
          <a href="https://github.com/Marques894" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/renanmarques894/" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a href="https://www.instagram.com/augustii_m/" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <FaInstagram />
            <span>Instagram</span>
          </a>
        </div>
      </div>
      </div>

      <div className="container">
      <footer className={styles.footer}>
        <span>© 2025 Renan Marques</span>
        <span>Construído com React + Vite</span>
      </footer>
      </div>
    </section>
  )
}
