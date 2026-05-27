import { useState, useEffect } from 'react'
import { FaChevronUp } from 'react-icons/fa'
import './App.css'
import Sobre from './views/Sobre'
import Projetos from './views/Projetos'
import Stakes from './views/Stakes'
import Livros from './views/Livros'
import Roadmap from './views/Roadmap'
import Contato from './views/Contato'

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#stakes', label: 'Stakes' },
  { href: '#livros', label: 'Livros' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#contato', label: 'Contato' },
]

export default function App() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <ul className="nav-links">
            {links.map((l) => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>

          <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
            <span className={open ? 'bar bar-open' : 'bar'} />
            <span className={open ? 'bar bar-open' : 'bar'} />
            <span className={open ? 'bar bar-open' : 'bar'} />
          </button>
        </div>

        {open && (
          <div className="mobile-menu">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {scrolled && (
        <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Voltar ao topo">
          <FaChevronUp />
        </button>
      )}

      <main>
        <Sobre />
        <Projetos />
        <Stakes />
        <Livros />
        <Roadmap />
        <Contato />
      </main>
    </>
  )
}
