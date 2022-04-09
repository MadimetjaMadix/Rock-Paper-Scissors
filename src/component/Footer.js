import React from 'react'

export default function Footer () {
  const getYear = () => {
    const year = new Date().getFullYear()
    return year
  }
  return (
    <footer className='glassy'>
      <div className='container'>
        <span className='text'>
          <p>Copyright ©  {getYear()} | <a href='https://madimetjamadix.github.io/portfolio/'>Madimetja Sethosa</a></p>
        </span>
      </div>
    </footer>
  )
}
