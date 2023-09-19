import React from 'react'

export default function ListHeader({listName}) {
  return (
    <div className='list-header'>
      <h1>{listName}</h1>
      <div className='button-container'>
        <button className='create'>Add New</button>
        <button className='sign-out'>Sign Out</button>

      </div>
    </div>
  )
}
