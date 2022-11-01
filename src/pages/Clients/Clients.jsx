import Clients1 from './../../assets/images/clientes1.jpg'
import Clients2 from './../../assets/images/clientes2.jpg'

import './clients.scss'

const Clients = () => {
  return (
    <div id='clients' className='Clients'>
      <h2 className='Clients-title h1'>Clients</h2>
      <div className='Clients-images'>
        <img src={Clients1} alt='' className='Clients-image' />
        <img src={Clients2} alt='' className='Clients-image' />
      </div>
    </div>
  )
}

export default Clients
