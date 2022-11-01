import { useState } from 'react'
import Nav from '../Nav/Nav'
import Logo from './../../assets/images/logo.png'
import { Squash as Hamburger } from 'hamburger-react'
import './header.scss'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false)
  return (
    <header className='Header'>
      <a href='/' className='Header-imageContainer'>
        <img src={Logo} alt='' className='Header-logo' />
      </a>
      <div className='Header-nav'>
        <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
        <Hamburger toggled={navOpen} toggle={setNavOpen} onToggle={(toggled) => setNavOpen(toggled)} size={20} rounded />
      </div>
    </header>
  )
}

export default Header
