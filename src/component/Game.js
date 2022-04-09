import React, { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'

import { compuerOptions, playerOptions } from '../Icons/Hands'
import SplashScreen from './SplashScreen'

export default function Game () {
  const [playerChoice, setPlayerChoice] = useState('✊')
  const [computerChoice, setComputerChoice] = useState('✊')
  const [animate, setAnimate] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)
  const [result, setResult] = useState(null)
  const [gameResults, setGameResults] = useState({ player: [0, 0, 0], computer: [0, 0, 0] })
  const [gameIndex, setGameIndex] = useState(-1)
  const [displaySplash, setDisplaySplash] = useState(true)

  let tempChoice = null
  let currIndex = -1
  const choices = ['✊', '🖐️', '✌']
  const choicesNames = ['Rock', 'Paper', 'Scissors']

  const handlePlayerChoice = (choice) => {
    tempChoice = choice
    currIndex = gameIndex + 1
    setDisplaySplash(false)
    if (animate) {
      setIsAnimating(true)
      animateGame()
    }
    setResult('...')
    setTimeout(updateDisplay, animate ? 1800 : 300)
    setGameIndex(gameIndex + 1)
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

  const initialiseGame = () => {
    setGameResults({ player: [0, 0, 0], computer: [0, 0, 0] })
    setGameIndex(-1)
    currIndex = 0
  }

  const setScore = (player, computer) => {
    const tempGameResults = gameResults
    if (currIndex >= 0 && currIndex <= 2) {
      tempGameResults.computer[currIndex] = computer
      tempGameResults.player[currIndex] = player
    }
    if (currIndex >= 2) {
      setDisplaySplash(true)
    }
    setGameResults(tempGameResults)
  }

  const getResults = (playerChoice, computerChoice, game = true) => {
    if (isAnimating) return
    switch (playerChoice + computerChoice) {
      case '✊✌':
      case '✌🖐️':
      case '🖐️✊':
        setResult('You Won!')
        if (game) setScore(1, 0)
        break
      case '✌✊':
      case '🖐️✌':
      case '✊🖐️':
        setResult('You lose!')
        if (game) setScore(0, 1)
        break
      case '✌✌':
      case '🖐️🖐️':
      case '✊✊':
        setResult('You tied')
        if (game) setScore(1, 1)
        break
      default: break
    }
  }

  useEffect(() => getResults(playerChoice, computerChoice), [gameIndex])

  const handleAnimateInput = () => {
    setAnimate(!animate)
  }

  const handleNewGame = () => {
    initialiseGame()
    setDisplaySplash(false)
  }

  return (
    <div className='container'>
      <div className='game container'>
        <div className='btn-input'>
          <button className='primary-btn glassy' onClick={() => handleAnimateInput()}>
            {animate ? 'no-animation' : 'animate'}
          </button>
          <button className='primary-btn glassy' onClick={() => initialiseGame()}>
            New Game
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
        <div className='game-results'>
          <div className='computer'>
            <div className='stars'>
              {gameResults.computer.map((star, index) => <Icon key={index} icon={`codicon:star-${star === 1 ? 'full' : 'empty'}`} />)}
            </div>
            <span className='name'>Computer</span>
          </div>
          <div className='player'>
            <div className='stars'>
              {gameResults.player.map((star, index) => <Icon key={index} icon={`codicon:star-${star === 1 ? 'full' : 'empty'}`} />)}
            </div>
            <span className='name'>Your Score</span>
          </div>
        </div>
      </div>
      {displaySplash && <SplashScreen result={result} onClick={handleNewGame} />}
    </div>
  )
}
