import { Icon } from '@iconify/react'

export default function Stars ({ results, type, name }) {
  return (
    <div className={type}>
      <div className='stars'>
        {results?.map((star, index) => <Icon key={index} icon={`codicon:star-${star === 1 ? 'full' : 'empty'}`} />)}
      </div>
      <span className='name'>{name}</span>
    </div>
  )
}
