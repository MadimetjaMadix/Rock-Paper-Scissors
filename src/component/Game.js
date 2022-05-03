import React, { useState, useEffect } from 'react'

import SplashScreen from './SplashScreen'
import HandDisplay from './HandDisplay'
import Stars from './Stars'

export default function Game () {
  const avatar = window.localStorage.getItem('avatar') || 'emojione:alien'
  const [myAvatar, setMyAvatar] = useState(avatar)
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

  const initialiseGame = () => {
    setGameResults({ player: [0, 0, 0], computer: [0, 0, 0] })
    setPlayerChoice('✊')
    setComputerChoice('✊')
    setResult('...')
  }

  const setScore = (player, computer) => {
    const i = currIndex === -1 ? gameIndex : currIndex
    const tempGameResults = gameResults
    if (i >= 0 && i <= 2) {
      tempGameResults.computer[i] = computer
      tempGameResults.player[i] = player
    }
    if (i >= 2) {
      setDisplaySplash(true)
    }
    setGameResults(tempGameResults)
  }

  const getResults = (playerChoice, computerChoice) => {
    const i = currIndex === -1 ? gameIndex : currIndex
    const isPlaying = (i >= 0 && i <= 3)
    if (isAnimating) return
    switch (playerChoice + computerChoice) {
      case '✊✌':
      case '✌🖐️':
      case '🖐️✊':
        setScore(1, 0)
        setResult('You Won!')
        break
      case '✌✊':
      case '🖐️✌':
      case '✊🖐️':
        setScore(0, 1)
        setResult('You lost!')
        break
      case '✌✌':
      case '🖐️🖐️':
      case '✊✊':
        if (!isPlaying) {
          setResult('...')
          break
        }
        setScore(1, 1)
        setResult('You tied')
        break
      default: break
    }
  }

  useEffect(() => getResults(playerChoice, computerChoice), [result])

  const handleAnimateInput = () => {
    setAnimate(!animate)
  }

  const handleNewGame = () => {
    initialiseGame()
    setDisplaySplash(false)
    setGameIndex(-1)
    currIndex = -1
  }

  const handleAvatarClick = (avaterIcon) => {
    setMyAvatar(avaterIcon)
    window.localStorage.setItem('avatar', avaterIcon)
  }

  return (
    <div className='container'>
      <div className='game container'>
        <div className='btn-input'>
          <button className='primary-btn glassy' onClick={() => handleAnimateInput()}>
            {animate ? 'no-animation' : 'animate'}
          </button>
          <button className='primary-btn glassy' onClick={() => handleNewGame()}>
            NEW GAME
          </button>
        </div>
        <HandDisplay computerChoice={computerChoice} playerChoice={playerChoice} myAvatar={myAvatar} />
        <div className='results'>{result}</div>
        <p>select your hand</p>
        <div className='selection-btns'>
          {choices.map((choice, index) =>
            <button className='select-btn glassy pop-up' key={index} onClick={() => handlePlayerChoice(choice)} disabled={displaySplash || isAnimating}> {choice} <br /> {choicesNames[index]}</button>
          )}
        </div>
        <hr />
        <div className='game-results'>
          <Stars results={gameResults.computer} type='computer' name='Computer' />
          <span>{`${gameIndex + 1}/3`}</span>
          <Stars results={gameResults.player} type='player' name='Your score' />
        </div>
      </div>
      {displaySplash && <SplashScreen results={gameResults} onClick={handleNewGame} onClickAvatar={handleAvatarClick} myAvatar={myAvatar} />}
    </div>
  )
}
