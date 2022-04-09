import { Icon } from '@iconify/react'
import logo from '../My-Logo.png'

export default function Header () {
  return (
    <header className='glassy'>
      <nav className=' container'>
        <a href='https://madimetjamadix.github.io/portfolio/'><img className='logo' src={logo} alt='logo' /></a>
        <span className='title'> Rock Paper Scissors</span>
        <a href='https://github.com/MadimetjaMadix/Rock-Paper-Scissors'><Icon icon='icon-park-outline:github-one' width='32' /></a>
      </nav>
    </header>
  )
}
