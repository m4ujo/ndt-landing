import './button.scss'

const Button = ({ type = 'button', href = 'home', text = 'Button' }) => {
  return type === 'button'
    ? (
      <button className='Button' type='submit' >{text}</button>
      )
    : (
      <a className='Button' href={`#${href}`}>
        {text}
      </a>
      )
}

export default Button
