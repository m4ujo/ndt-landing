import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Clients from './pages/Clients/Clients'
import Contact from './pages/Contact/Contact'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <main className='Main'>
        <Home />
        <About />
        <Services />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App