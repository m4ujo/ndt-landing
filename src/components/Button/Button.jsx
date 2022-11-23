const Button = ({ type = 'button', href = 'home', text = 'Button' }) => {
  return type === 'button'
    ? (
      <button
        onClick={(e) => {
          e.preventDefault()
        }}
        className='Button'
        type='submit'
      >
        {text}
      </button>
      )
    : (
      <a className='Button' href={`#${href}`}>
        {text}
      </a>
      )
}

export default Button
