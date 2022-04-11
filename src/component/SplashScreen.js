import React from 'react'
import { Icon } from '@iconify/react'
import { avaterOptions } from '../Icons/Hands'

export default function SplashScreen ({ results, onClick, onClickAvatar, myAvatar }) {
  const gatGameResults = () => {
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
  const getContent = (gameResults) => {
    let content
    switch (gameResults) {
      case 'WON':
        content = (
          <>
            <p>
              There you have it, it's a
              <br />
              <span className='glowy win'>WIN</span>
              <br />
              {results.player.map((star, index) => <Icon key={index} icon={`codicon:star-${star === 1 ? 'full' : 'empty'}`} />)}
              <br />
              for you, we hope this helps ease the stress.
            </p>
          </>
        )
        break
      case 'LOST':
        content = (
          <>
            <p>
              There you have it, it's a
              <br />
              <span className='glowy lost'>LOSE</span>
              <br />
              {results.player.map((star, index) => <Icon key={index} icon={`codicon:star-${star === 1 ? 'full' : 'empty'}`} />)}
              <br />
              for you, we hope this helps ease the stress.
            </p>
          </>
        )
        break
      case 'TIE':
        content = (
          <>
            <p>
              Unfortunately we are a bit undecisive ourselves, it's a
              <br />
              <span className='glowy tie'>TIE</span>
              <br />
              {results.player.map((star, index) => <Icon key={index} icon={`codicon:star-${star === 1 ? 'full' : 'empty'}`} />)}
              <br />
              however you can play again.
            </p>
          </>
        )
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
            <p>Feeling a bit indecisive? play <br /> <span className='glowy open'>Rock-Paper-Scissors</span> <br /> and get your day rolling.</p>
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
        {getContent(gatGameResults())}
      </div>
      <button className='primary-btn glassy pop-up' onClick={onClick}> NEW GAME</button>
    </div>
  )
}
