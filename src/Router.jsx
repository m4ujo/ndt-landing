import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Clients from './pages/Clients/Clients'
import Contact from './pages/Contact/Contact'

const Router = () => {
  return (
    <Routes>
      <Route path='home' element={<Home />} />
      <Route path='about-us' element={<About />} />
      <Route path='services' element={<Services />} />
      <Route path='clients' element={<Clients />} />
      <Route path='contact' element={<Contact />} />
    </Routes>
  )
}

export default Router
