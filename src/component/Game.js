import React, { useState, useEffect } from 'react'

export default function Game() {
  const [playerChoice, setPlayerChoice] = useState('✊')
  const [tempChoice, setTempChoice] = useState('✊')
  const [computerChoice, setComputerChoice] = useState('✊')
  const [animate, setAnimate] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)
  const [result, setResult] = useState(null)
  const choices = ['✊', '🖐️', '✌']

  const handlePlayerChoice = (choice) => {
    if (animate) {
      setIsAnimating(true)
      animateGame()
    }
    setTempChoice(choice)
    setResult('')
    setTimeout(updateDisplay, animate ? 1800 : 300)
  }

  const updateDisplay = () => {
    toggleAnimate()
    setIsAnimating(false)
    setPlayerChoice(tempChoice)
    getComputerChoice()
    getResults(playerChoice, computerChoice)
  }

  const toggleAnimate = () => {
    if (animate) {
      const elements = document.getElementsByClassName('choice')
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.toggle('animate')
      }
    }
  }

  const animateGame = () => {
    console.log('Ani')
    toggleAnimate()
    setPlayerChoice('✊')
    setComputerChoice('✊')
    setResult('')
  }

  const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length)
    const randomChoice = choices[randomIndex]
    setComputerChoice(randomChoice)
  }

  useEffect(() => {
    getResults(playerChoice, computerChoice)
  }, [playerChoice, computerChoice])

  const getResults = (playerChoice, computerChoice) => {
    if (isAnimating) return
    switch (playerChoice + computerChoice) {
      case '✊✌':
      case '✌🖐️':
      case '🖐️✊':
        setResult('You Won!')
        break
      case '✌✊':
      case '🖐️✌':
      case '✊🖐️':
        setResult('You lose!')
        break
      case '✌✌':
      case '🖐️🖐️':
      case '✊✊':
        setResult('You tied')
        break
      default: break
    }
  }

  const handleAnimateInput = () => {
    setAnimate(!animate)
  }

  return (
    <div className='game container'>
      <div className='animate-input'><button className='animate-btn' onClick={() => handleAnimateInput()}> animate</button></div>
      <div className='display-box'>
        <div className='computer-Icon'>🕹</div>
        <div className='computer choice'>
          <span className='hand computer-hand'>
            {computerChoice}
          </span>
        </div>
        <div className='player choice'>
          <span className='hand player-hand'>
            {playerChoice}
          </span>
        </div>
        <div className='player-Icon'>🧑</div>
      </div>
      <div className='results'>{result}</div>
      <div className='selection-btns'>
        {choices.map((choice, index) =>
          <button key={index} onClick={() => handlePlayerChoice(choice)}> {choice}</button>
        )}
      </div>
    </div>
  )
}
