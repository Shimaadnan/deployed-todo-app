import React from 'react'

export default function ProgressBar({progress}) {
  return (
    <div className='outer-bar'>
      <div className='inner-bar'
      style={{width:`${progress}%` ,backgroundColor:'red'}}>
        
      </div>
    </div>
  )
}
