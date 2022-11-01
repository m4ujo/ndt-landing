import { useEffect, useRef } from 'react'
import './carousel.scss'

const Carousel = ({ images }) => {
  const ref = useRef()

  useEffect(() => {
    const carouselContainer = ref.current
    const CANT = carouselContainer.children.length
    const percTrans = 100 / CANT
    let pos = 0
    let reverse = false

    setInterval(() => {
      pos = reverse ? pos - 1 : pos + 1
      if (pos === CANT - 1) reverse = true
      if (pos === 0) reverse = false
      carouselContainer.style.transform = `translateX(-${percTrans * pos}%)`
    }, 5000)
  }, [])

  return (
    <div className='Carousel' ref={ref}>
      {images.map(({image, alt}, index) => {
        return <div className="Carousel-item" key={index}>
          <img src={image} alt={alt} className='Carousel-image' />
        </div>
      })}
    </div>
  )
}

export default Carousel
