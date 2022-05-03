import React from 'react'
import { Icon } from '@iconify/react'
import { avaterOptions } from '../Icons/Hands'

export default function SplashScreen ({ results, onClick, onClickAvatar, myAvatar }) {
  const getGameResults = () => {
    const playerScore = results.player.reduce((total, num) => total + num)
    const computerScore = results.computer.reduce((total, num) => total + num)

    if (playerScore > computerScore) {
      return 'WON'
    } else if (playerScore < computerScore) {
      return 'LOST'
    } else if (playerScore === computerScore && computerScore !== 0) {
      return 'TIE'
    } else { return 'OPEN' }
  }

  const getActiveAvatar = () => {
    const index = avaterOptions.findIndex(avater => avater.icon === myAvatar) ?? 0
    return avaterOptions[index].icon
  }

  const splashContent =
    {
      won: {
        intro: 'There you have it, it\'s a',
        outro: 'for you, we hope this helps ease the stress.',
        state: 'WIN'
      },
      lost: {
        intro: 'There you have it, it\'s a',
        outro: 'for you, we hope this helps ease the stress.',
        state: 'LOSE'
      },
      tie: {
        intro: 'Unfortunately we are a bit indecisive ourselves, it\'s a',
        outro: 'however you can play again.',
        state: 'TIE'
      },
      open: {
        intro: 'Feeling a bit indecisive? play',
        outro: 'and get your day rolling.',
        state: 'Rock-Paper-Scissors'
      }
    }

  const Content = ({ state, arr, open = false }) => {
    return (
      <>
        <p>
          {splashContent[state]?.intro}
          <br />
          <span className='glowy win'>{splashContent[state]?.state}</span>
          <br />
          {!open && arr.map((star, index) => <Icon key={index} icon={`codicon:star-${star === 1 ? 'full' : 'empty'}`} />)}
          <br />
          {splashContent[state]?.outro}
        </p>
      </>
    )
  }

  const getContent = (gameResults) => {
    let content
    switch (gameResults) {
      case 'WON':
        content = <Content state='won' arr={results.player} />
        break
      case 'LOST':
        content = <Content state='lost' arr={results.player} />
        break
      case 'TIE':
        content = <Content state='tie' arr={results.player} />
        break
      case 'OPEN':
        content = (
          <>
            <p>Choose Your Avatar</p>
            <div className='avatar-list'>
              {avaterOptions.map((avater, i) =>
                <div
                  key={i}
                  className={`avatar ${getActiveAvatar() === avater.icon ? 'active' : ''}`}
                  onClick={() => onClickAvatar(avater.icon)}
                >
                  <Icon icon={avater.icon} />
                </div>
              )}
            </div>
            <Content state='open' arr={results.player} open />
          </>
        )
        break
      default: break
    }
    return content
  }

  return (
    <div className=' spalash-screen glassy container'>
      <div className='spalash-content'>
        {getContent(getGameResults())}
      </div>
      <button className='primary-btn glassy pop-up' onClick={onClick}> NEW GAME</button>
    </div>
  )
}
