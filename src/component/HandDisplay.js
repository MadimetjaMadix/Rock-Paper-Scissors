import { Icon } from '@iconify/react'
import { getHandIcon } from '../Icons/Hands'

export default function HandDisplay ({ computerChoice, playerChoice, myAvatar }) {
  return (
    <div className='display-box'>
      <div className='computer-Icon'><Icon icon='noto:desktop-computer' width='32' /></div>
      <div className='computer choice'>
        <span className='hand computer-hand'>
          {getHandIcon(computerChoice, 'computer')}
        </span>
      </div>
      <div className='player choice'>
        <span className='hand player-hand'>
          {getHandIcon(playerChoice, 'player')}
        </span>
      </div>
      <div className='player-Icon'><Icon icon={myAvatar} width='32' /></div>
    </div>
  )
}
