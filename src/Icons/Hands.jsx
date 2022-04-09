import { Icon } from '@iconify/react'

const rockC = <Icon icon='emojione:right-facing-fist-medium-light-skin-tone' />
const paperC = <Icon icon='emojione:hand-with-fingers-splayed-medium-light-skin-tone' rotate={1} hFlip={true} />
const scissorC = <Icon icon='emojione:victory-hand-medium-light-skin-tone' rotate={1} hFlip={true} />

const rockP = <Icon icon='emojione:left-facing-fist-medium-light-skin-tone' />
const paperP = <Icon icon='emojione:hand-with-fingers-splayed-medium-light-skin-tone' rotate={3} />
const scissorP = <Icon icon='emojione:victory-hand-medium-light-skin-tone' rotate={3} />

const compuerOptions = [rockC, paperC, scissorC]
const playerOptions = [rockP, paperP, scissorP]
export { compuerOptions, playerOptions }
