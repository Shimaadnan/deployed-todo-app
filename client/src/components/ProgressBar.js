import React from 'react'

export default function ProgressBar({progress}) {
  const colors=[
    'rgb(255,241,161)',
    'rgb(255,175,163)',
    
    'rgb(108,115,148) ',
    'rgb(141,181,145)'
  ]
  const randomcolors=colors[Math.floor(Math.random()*colors.length)]
  return (
    <div className='outer-bar'>
      <div className='inner-bar'
      style={{width:`${progress}%` ,backgroundColor:randomcolors}}>
        
      </div>
    </div>
  )
}
