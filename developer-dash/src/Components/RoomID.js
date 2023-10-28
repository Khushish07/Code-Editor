import React from 'react'

export default function RoomID() {
  return (
    <div className='home-page-wrapper'>
        <div className='form-wrapper '>
            <img src='/Developer-Dash.png' className='home-page-logo'/>
            <h1 className='app-name'>Developer-Dash</h1>
            <h4 className='label'>Enter Room Details</h4>
            <div className='input-group'>
                <input type='text' className='input-box' placeholder='Name'/>
                <input type='text' className='input-box' placeholder='Room ID'/>
            </div>
            <button className='btn join-button'>Join Now</button>
            <br/>
            <span className='create-info'>If you don't have an invite then create &nbsp; 
            <a href='#'className='create-new-room'>new room</a>
            </span>
        </div>
        <footer>
            <h4>
        Built with 💖 by <a href='https://github.com/GameOver2811'>Algo Pirates</a>
            </h4>
        </footer>
    </div>
  )
}
