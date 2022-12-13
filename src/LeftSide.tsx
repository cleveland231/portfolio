import React from 'react'
import './LeftSide.css'

const LeftSide = () => {
  return (
    <div className='LeftSideTabs'>
        <div className='Navigation'> Welcome </div>
        <div className='Navigation'> About Me </div>
        <div className='Navigation'> Projects </div>
        <div className='Navigation'> Hobbies </div>
        <div className='Navigation'> Blog </div>
        <div className='Navigation'> Contact </div>
    </div>
  )
}

export default LeftSide