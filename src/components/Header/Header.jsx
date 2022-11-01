import { useState } from 'react'
import Nav from '../Nav/Nav'
import Logo from './../../assets/images/logo.png'
import { Squash as Hamburger } from 'hamburger-react'
import './header.scss'

const Header = () => {
  const [activeNav, setActiveNav] = useState('')
  return (
    <header className='Header'>
      <a href='/' className='Header-imageContainer'>
        <img src={Logo} alt='' className='Header-logo' />
      </a>
      <div className='Header-nav'>
        <Nav activeNav={activeNav} />
        <Hamburger
          onToggle={(toggled) => {
            if (toggled) {
              setActiveNav(' is-active')
            } else {
              setActiveNav('')
            }
          }}
          size={20}
        />
      </div>
    </header>
  )
}

export default Header
