import { Icon } from '@iconify/react'

const rockC = <Icon icon='emojione:right-facing-fist-medium-light-skin-tone' />
const paperC = <Icon icon='emojione:hand-with-fingers-splayed-medium-light-skin-tone' rotate={1} hFlip={true} />
const scissorC = <Icon icon='emojione:victory-hand-medium-light-skin-tone' rotate={1} hFlip={true} />

const rockP = <Icon icon='emojione:left-facing-fist-medium-light-skin-tone' />
const paperP = <Icon icon='emojione:hand-with-fingers-splayed-medium-light-skin-tone' rotate={3} />
const scissorP = <Icon icon='emojione:victory-hand-medium-light-skin-tone' rotate={3} />

const avaterOptions = [
  {
    icon: 'emojione:alien',
    name: 'Alien'
  },
  {
    icon: 'emojione:alien-monster',
    name: 'Monster'
  },
  {
    icon: 'emojione:man-medium-skin-tone',
    name: 'Man 1'
  },
  {
    icon: 'emojione:man-medium-light-skin-tone',
    name: 'Man 2'
  },
  {
    icon: 'emojione:man-medium-dark-skin-tone',
    name: 'Man 3'
  },
  {
    icon: 'emojione:woman-medium-skin-tone',
    name: 'Woman 1'
  },
  {
    icon: 'emojione:woman-medium-light-skin-tone',
    name: 'Woman 2'
  },
  {
    icon: 'emojione:woman-medium-dark-skin-tone',
    name: 'Woman 3'
  }

]
const compuerOptions = [rockC, paperC, scissorC]
const playerOptions = [rockP, paperP, scissorP]

const getHandIcon = (option, type) => {
  const IconsArray = type === 'computer' ? compuerOptions : playerOptions
  if (option === '✊') return IconsArray[0]
  else if (option === '🖐️') return IconsArray[1]
  else if (option === '✌') return IconsArray[2]
}
export { getHandIcon, avaterOptions }
