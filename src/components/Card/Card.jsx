import { useRef, useEffect } from 'react'
import './Card.scss'

export default function Card({ title, description, color }) {
  const ref = useRef()

  useEffect(() => {
    const { width, height } = ref.current.getBoundingClientRect()
    const halfWidth = width / 2
    const halfHeight = height / 2

    ref.current.addEventListener('mousemove', (e) => {
      const { offsetX, offsetY } = e
      const rotationX = ((offsetX - halfWidth) / halfWidth) * 8
      const rotationY = ((offsetY - halfHeight) / halfHeight) * 8
      ref.current.children[0].style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
    })

    ref.current.addEventListener('mouseleave', (e) => {
      ref.current.children[0].style.transform = 'rotateX(0deg) rotateY(0deg)'
    })
  }, [])

  return (
    <article className={`Card ${color}`} ref={ref}>
      <div className='Card-wrapper'>
        <div className='Card-content'>
          <header className='Card-header'>
            <p className='Card-title h3'>{title}</p>
          </header>
          <main className='Card-main'>
            <p className='Card-description'>{description}</p>
          </main>
        </div>
      </div>
    </article>
  )
}
