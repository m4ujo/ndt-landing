import Button from './../../components/Button/Button'

import './contact.scss'

const Contact = () => {
  return (
    <div id='contact' className='Contact'>
      <section className='Contact-section'>
        <h2 className='Contact-title h1'>Contact Us</h2>
        <main className='Contact-form'>
          <form className='Form'>
            <div className='Form-row'>
              <input
                type='text'
                name='fullname'
                id='fullname'
                className='Form-input'
                placeholder='Fullname'
              />
              <input
                type='email'
                name='email'
                id='email'
                className='Form-input'
                placeholder='Email'
              />
            </div>
            <div className='Form-row'>
              <input
                type='text'
                name='affair'
                id='affair'
                className='Form-input'
                placeholder='Affair'
              />
            </div>
            <div className='Form-row'>
              <textarea
                name='message'
                id='message'
                className='Form-input'
                placeholder='Message'
              ></textarea>
            </div>
            <div className='Form-row'>
              <Button text='Send' />
            </div>
          </form>
          <aside className='Contact-aside'>
            <p className='Contact-infoSubtitle h3'>More Info</p>
            <p className='Contact-info'>
              <i className='Contact-infoIcon bx bxs-map'></i>
              Puerta de Pro, Av. Gerardo Unger 7875, San Martín de Porres 15311
            </p>
            <p className='Contact-info'>
              <i className='Contact-infoIcon bx bxs-phone'></i>
              01 5369357
            </p>
            <p className='Contact-info'>
              <i className='Contact-infoIcon bx bxs-mobile'></i>
              990029120
            </p>
            <p className='Contact-info'>
              <i className='Contact-infoIcon bx bxs-envelope'></i>
              mhuaranga@weldingtech.com.pe
            </p>
          </aside>
        </main>
      </section>
    </div>
  )
}

export default Contact
