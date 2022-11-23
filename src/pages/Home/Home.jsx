import Waves from './../../assets/images/bg.svg'
import Button from '../../components/Button/Button'

const Home = () => {
  return (
    <div id='home' className='Home'>
      <section className='Home-section section'>
        <h1 className='Home-title special'>
          <span>NONAME DOUBLE</span>
          <span>TECH</span>
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
