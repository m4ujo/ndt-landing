import { useRef, useEffect } from 'react'
import './nav.scss'

export default function Nav({ navOpen, setNavOpen }) {
  const ref = useRef()

  useEffect(() => {
    const navLinks = ref.current.children[0].children

    for (let i = 0; i < navLinks.length; i++) {
      const element = navLinks[i]
      element.addEventListener('click', () => {
        setNavOpen(false)
      })
    }
  }, [])

  return (
    <nav className={`Nav${navOpen ? ' is-active' : ''}`} ref={ref}>
      <ul className='Nav-content'>
        <a href='#home' className='Nav-link'>
          Home
        </a>

        <a href='#about-us' className='Nav-link'>
          About Us
        </a>

        <a href='#services' className='Nav-link'>
          Services
        </a>

        <a href='#clients' className='Nav-link'>
          Clients
        </a>

        <a href='#contact' className='Nav-link'>
          Contact
        </a>
      </ul>
    </nav>
  )
}
