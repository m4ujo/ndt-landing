import Button from './../../components/Button/Button'

const Contact = () => {
  return (
    <div id='contact' className='Contact'>
      <section className='Contact-section'>
        <h2 className='Contact-title h1'>Contact Us</h2>
        <main className='Contact-form'>
          <aside className='Contact-aside'>
            <p className='Contact-infoSubtitle h3'>Info</p>
            <a
              className='Contact-info'
              href='https://goo.gl/maps/f5nuJb2eV6DZat6DA'
              target='_blank' rel='noreferrer'
            >
              <i className='Contact-infoIcon bx bxs-map' />
              <p>
                Puerta de Pro, Av. Gerardo Unger 7875, San Martín de Porres
                15311
              </p>
            </a>
            <a
              className='Contact-info'
              href='https://api.whatsapp.com/send?phone=+51951087033&text=Hola,%20estamos%20interesados%20en%20sus%20servicios.'
              target='_blank' rel='noreferrer'
            >
              <i className='Contact-infoIcon bx bxl-whatsapp' />
              <p>951087033</p>
            </a>
            <p className='Contact-info'>
              <i className='Contact-infoIcon bx bxs-phone' />
              01 5159999
            </p>
            <p className='Contact-info'>
              <i className='Contact-infoIcon bx bxs-envelope' />
              mcastillo@ndt.com.pe
            </p>
          </aside>
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
                name='subject'
                id='subject'
                className='Form-input'
                placeholder='Subject'
              />
            </div>
            <div className='Form-row'>
              <textarea
                name='message'
                id='message'
                className='Form-input'
                placeholder='Message'
              />
            </div>
            <div className='Form-row'>
              <Button text='Send' />
            </div>
          </form>
        </main>
      </section>
    </div>
  )
}

export default Contact
