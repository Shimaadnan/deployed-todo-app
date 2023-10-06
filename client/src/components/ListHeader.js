import React, { useState } from 'react'
import Modal from './Modal'

export default function ListHeader({listName}) {
  const[showModal,setShowModal]=useState(false)
  const signOut=()=>{
    console.log('signout');
  }
  return (
    <div className='list-header'>
      <h1>{listName}</h1>
      <div className='button-container'>
        <button className='create' onClick={()=>setShowModal(true)}>Add New</button>
        <button className='sign-out' onClick={signOut}>Sign Out</button>

      </div>
      {showModal && <Modal mode={'create'} setShowModal={setShowModal }/>}
    </div>
  )
}
