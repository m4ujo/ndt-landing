import './home.scss'
import Waves from './../../assets/images/bg.svg'
import Button from '../../components/Button/Button'

const Home = () => {
  return (
    <div id='home' className='Home'>
      <section className='Home-section'>
        <h1 className='Home-title special'>
          <span>WELDING TECH</span>
          <span>CONSULTING</span>
        </h1>
        <h3 className='Home-subtitle'>NON-DESTRUCTIVE TESTING SERVICES</h3>
        <Button type='link' href='contact' text='Contact Us' />
      </section>
      <div className='Home-bg'>
        <img src={Waves} alt='' />
      </div>
    </div>
  )
}

export default Home
