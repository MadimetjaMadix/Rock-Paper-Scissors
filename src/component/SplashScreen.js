import React from 'react'

export default function SplashScreen ({ result, onClick }) {
  return (
    <div className=' spalash-screen glassy container'>
      <p>{result}</p>
      <button className='primary-btn glassy' onClick={onClick}> new game</button>
    </div>
  )
}
