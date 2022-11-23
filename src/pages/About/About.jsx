import Card from './../../components/Card/Card'

const data = [
  {
    id: 1,
    title: 'Company',
    description:
      "We're a quality management consulting company that provides vital support to the industry through the provision of our non-destructive testing (NDT) services."
  },
  {
    id: 2,
    title: 'Experience',
    description:
      'Our experience in a wide range of projects, together with the collaboration of recognized national and foreign professionals, achieves reliable, repeatable, accurate and safe results in the field of non-destructive testing.'
  },
  {
    id: 3,
    title: 'Certifications',
    description:
      'Staff certifications include ASNT Level II and III in MT-PT-UT-RT-ET and Weld Inspection IIW, CWI, SCWI, CRI, spanning over a decade of experience.'
  }
]

const About = () => {
  return (
    <div id='about-us' className='About'>
      <section className='About-section'>
        <h2 className='About-title h1'>About Us</h2>
        <div className='About-cards section'>
          {data.map(({ id, title, description }) => {
            return (
              <Card key={id} title={title} description={description} color='black' />
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default About
