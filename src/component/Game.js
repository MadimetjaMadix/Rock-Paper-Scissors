import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'
import { compuerOptions, playerOptions } from '../Icons/Hands'

export default function Game () {
  const [playerChoice, setPlayerChoice] = useState('✊')
  let tempChoice = null
  const [computerChoice, setComputerChoice] = useState('✊')
  const [animate, setAnimate] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)
  const [result, setResult] = useState(null)
  const choices = ['✊', '🖐️', '✌']
  const choicesNames = ['Rock', 'Paper', 'Scissors']

  const handlePlayerChoice = (choice) => {
    tempChoice = choice
    if (animate) {
      setIsAnimating(true)
      animateGame()
    }
    setResult('...')
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
    toggleAnimate()
    setPlayerChoice('✊')
    setComputerChoice('✊')
    setResult('...')
  }

  const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length)
    const randomChoice = choices[randomIndex]
    setComputerChoice(randomChoice)
  }

  const getIcon = (option, type) => {
    const IconsArray = type === 'computer' ? compuerOptions : playerOptions
    if (option === '✊') return IconsArray[0]
    else if (option === '🖐️') return IconsArray[1]
    else if (option === '✌') return IconsArray[2]
  }

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

  useEffect(() => getResults(playerChoice, computerChoice))

  const handleAnimateInput = () => {
    setAnimate(!animate)
  }

  return (
    <div className='game container'>
      <div className='animate-input'>
        <button className='animate-btn glassy' onClick={() => handleAnimateInput()}>
          {animate ? 'no-animation' : 'animate'}
        </button>
      </div>
      <div className='display-box'>
        <div className='computer-Icon'><Icon icon='noto:desktop-computer' width='32' /></div>
        <div className='computer choice'>
          <span className='hand computer-hand'>
            {getIcon(computerChoice, 'computer')}
          </span>
        </div>
        <div className='player choice'>
          <span className='hand player-hand'>
            {getIcon(playerChoice, 'player')}
          </span>
        </div>
        <div className='player-Icon'><Icon icon='emojione:man-medium-skin-tone' width='32' /></div>
      </div>
      <div className='results'>{result}</div>
      <p>select your hand</p>
      <div className='selection-btns'>
        {choices.map((choice, index) =>
          <button className='select-btn glassy' key={index} onClick={() => handlePlayerChoice(choice)}> {choice} <br /> {choicesNames[index]}</button>
        )}
      </div>
    </div>
  )
}
